'use client';

import Link from 'next/link';
import { useEffect, useMemo, useRef, useState, type WheelEvent } from 'react';

import { AppLocale, withLocalePath } from '@/utils/locale';

import {
  type PricingExperienceContent,
  type PlanFinderAnswers,
  type SelectOption,
  getPlanFinderRecommendation,
} from './pricingCatalog';

const DEFAULT_ANSWERS: PlanFinderAnswers = {
  businessType: '',
  teamSize: '',
  needs: [],
  websiteNeed: '',
  setupPreference: '',
  pageCount: '',
  contentComplexity: '',
};

const WEBSITE_ONLY = 'Website only';

type Props = {
  locale: AppLocale;
  comparePlansHref: string;
  content: PricingExperienceContent['planFinder'];
  plans: PricingExperienceContent['subscriptionPlans'];
  setupServices: PricingExperienceContent['websiteSetupServices'];
  planHrefFor: (planKey: string) => string;
  basicSetupHref: string;
  growthSetupHref: string;
  premiumSetupHref: string;
};

type WizardStep = {
  key:
    | 'businessType'
    | 'teamSize'
    | 'needs'
    | 'websiteNeed'
    | 'setupPreference'
    | 'pageCount'
    | 'contentComplexity'
    | 'recommendation';
  title: string;
};

const getOptionValue = (option: SelectOption) => (typeof option === 'string' ? option : option.key);
const getOptionLabel = (option: SelectOption) => (typeof option === 'string' ? option : option.label);
const getOptionDescription = (option: SelectOption) =>
  typeof option === 'string' ? '' : option.description || option.helper || '';

const replaceTemplate = (template: string, values: Record<string, string>) =>
  template.replace(/\{\{(\w+)\}\}/g, (_, key) => values[key] ?? '');

export default function PlanFinderModal({
  locale,
  comparePlansHref,
  content,
  plans,
  setupServices,
  planHrefFor,
  basicSetupHref,
  growthSetupHref,
  premiumSetupHref,
}: Props) {
  const [open, setOpen] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<PlanFinderAnswers>(DEFAULT_ANSWERS);
  const [businessTypeQuery, setBusinessTypeQuery] = useState('');
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const contentScrollRef = useRef<HTMLDivElement | null>(null);

  const needsWebsiteSetupQuestions =
    !!answers.websiteNeed &&
    answers.websiteNeed !== 'internal_only' &&
    ['done_for_you', 'not_sure'].includes(answers.setupPreference);

  const steps = useMemo(() => {
    const base: WizardStep[] = [
      { key: 'businessType', title: content.questions.businessType.label },
      { key: 'teamSize', title: content.questions.teamSize.label },
      { key: 'needs', title: content.questions.needs.label },
      { key: 'websiteNeed', title: content.questions.websiteNeed.label },
      { key: 'setupPreference', title: content.questions.setupPreference.label },
    ];
    if (needsWebsiteSetupQuestions) {
      base.push(
        { key: 'pageCount', title: content.questions.pageCount.label },
        { key: 'contentComplexity', title: content.questions.contentComplexity.label },
      );
    }
    base.push({ key: 'recommendation', title: content.final.recommendationTitle });
    return base;
  }, [content, needsWebsiteSetupQuestions]);

  const currentStep = steps[stepIndex];
  const isFinalStep = currentStep?.key === 'recommendation';
  const progress = ((stepIndex + 1) / steps.length) * 100;

  const recommendation = useMemo(() => {
    const ready =
      !!answers.teamSize &&
      !!answers.websiteNeed &&
      !!answers.setupPreference &&
      answers.needs.length > 0 &&
      (!needsWebsiteSetupQuestions || (!!answers.pageCount && !!answers.contentComplexity));
    return ready ? getPlanFinderRecommendation(answers, content.final) : null;
  }, [answers, content.final, needsWebsiteSetupQuestions]);

  const recommendedPlan = plans.find((plan) => plan.key === recommendation?.planKey) || null;
  const recommendedSetup = setupServices.items.find((item) => item.key === recommendation?.setupKey) || null;

  const guidance = useMemo(() => {
    if (!recommendation?.planKey) {
      return '';
    }
    if (recommendation.planKey === 'starter') {
      return content.final.guidance.starter;
    }
    if (recommendation.planKey === 'pro') {
      return content.final.guidance.pro;
    }
    return content.final.guidance.business;
  }, [content.final.guidance, recommendation]);

  useEffect(() => {
    if (!open) {
      return;
    }
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  const resetAndOpen = () => {
    setAnswers(DEFAULT_ANSWERS);
    setStepIndex(0);
    setBusinessTypeQuery('');
    setOpen(true);
  };

  const close = () => setOpen(false);

  const handleContainedWheel = (event: WheelEvent<HTMLElement>) => {
    const target = event.target as HTMLElement | null;
    const boundary = dialogRef.current;
    if (!target || !boundary) {
      return;
    }

    const scrollables: HTMLElement[] = [];
    let node: HTMLElement | null = target;

    while (node && node !== boundary) {
      if (node.dataset.planfinderScrollable === 'true') {
        scrollables.push(node);
      }
      node = node.parentElement;
    }

    if (contentScrollRef.current && !scrollables.includes(contentScrollRef.current)) {
      scrollables.push(contentScrollRef.current);
    }

    const canScroll = (element: HTMLElement) => {
      if (element.scrollHeight <= element.clientHeight) {
        return false;
      }
      if (event.deltaY < 0) {
        return element.scrollTop > 0;
      }
      if (event.deltaY > 0) {
        return element.scrollTop + element.clientHeight < element.scrollHeight - 1;
      }
      return false;
    };

    const activeScrollable = scrollables.find(canScroll) ?? scrollables[0];
    if (!activeScrollable) {
      return;
    }

    activeScrollable.scrollTop += event.deltaY;
    event.preventDefault();
    event.stopPropagation();
  };

  const setAnswer = (field: keyof PlanFinderAnswers, value: string) => {
    setAnswers((prev) => {
      const next = { ...prev, [field]: value };
      if (field === 'websiteNeed' && value === 'internal_only') {
        next.setupPreference = 'diy';
        next.pageCount = '';
        next.contentComplexity = '';
      }
      if (field === 'setupPreference' && !['done_for_you', 'not_sure'].includes(value)) {
        next.pageCount = '';
        next.contentComplexity = '';
      }
      return next;
    });
  };

  const toggleNeed = (need: string) => {
    setAnswers((prev) => {
      const hasNeed = prev.needs.includes(need);
      if (need === WEBSITE_ONLY) {
        return { ...prev, needs: hasNeed ? [] : [WEBSITE_ONLY] };
      }
      const baseNeeds = prev.needs.filter((item) => item !== WEBSITE_ONLY);
      return {
        ...prev,
        needs: hasNeed ? baseNeeds.filter((item) => item !== need) : [...baseNeeds, need],
      };
    });
  };

  const canGoNext = (() => {
    switch (currentStep?.key) {
      case 'businessType':
        return !!answers.businessType;
      case 'teamSize':
        return !!answers.teamSize;
      case 'needs':
        return answers.needs.length > 0;
      case 'websiteNeed':
        return !!answers.websiteNeed;
      case 'setupPreference':
        return !!answers.setupPreference;
      case 'pageCount':
        return !!answers.pageCount;
      case 'contentComplexity':
        return !!answers.contentComplexity;
      case 'recommendation':
        return true;
      default:
        return false;
    }
  })();

  const renderCards = ({
    options,
    value,
    multi = false,
    onSelect,
  }: {
    options: readonly SelectOption[];
    value: string | string[];
    multi?: boolean;
    onSelect: (value: string) => void;
  }) => (
    <div className="grid gap-3 sm:grid-cols-2">
      {options.map((option) => {
        const optionValue = getOptionValue(option);
        const optionLabel = getOptionLabel(option);
        const optionDescription = getOptionDescription(option);
        const selected = multi ? (value as string[]).includes(optionValue) : value === optionValue;
        return (
          <button
            key={optionValue}
            type="button"
            onClick={() => onSelect(optionValue)}
            className={`rounded-2xl border p-4 text-left transition ${
              selected
                ? 'border-primary bg-primary/10 shadow-[0_12px_28px_rgba(21,101,216,0.12)]'
                : 'border-stroke-2 bg-white hover:border-primary/60 hover:shadow-[0_12px_28px_rgba(15,23,42,0.06)] dark:border-stroke-7 dark:bg-background-8'
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-semibold text-secondary dark:text-white">{optionLabel}</p>
                {optionDescription ? (
                  <p className="mt-2 text-sm leading-6 text-secondary/70 dark:text-accent/70">{optionDescription}</p>
                ) : null}
              </div>
              {selected ? (
                <span className="inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                  ✓
                </span>
              ) : null}
            </div>
          </button>
        );
      })}
    </div>
  );

  const filteredBusinessTypeOptions = useMemo(() => {
    const query = businessTypeQuery.trim().toLowerCase();
    if (!query) {
      return content.questions.businessType.options;
    }
    return content.questions.businessType.options.filter((option) => {
      const label = getOptionLabel(option).toLowerCase();
      const description = getOptionDescription(option).toLowerCase();
      return label.includes(query) || description.includes(query);
    });
  }, [businessTypeQuery, content.questions.businessType.options]);

  const renderBusinessTypeSelector = () => (
    <div className="space-y-5">
      <div>
        <h3 className="text-heading-4">{content.questions.businessType.label}</h3>
        <p className="mt-2 text-sm leading-6 text-secondary/70 dark:text-accent/70">
          {content.questions.businessType.helper}
        </p>
      </div>
      <div className="rounded-2xl border border-stroke-2 bg-background-1 p-4 dark:border-stroke-7 dark:bg-background-7/60">
        <div className="flex items-center gap-3 rounded-2xl border border-stroke-2 bg-white px-4 py-3 dark:border-stroke-7 dark:bg-background-8">
          <svg viewBox="0 0 24 24" className="h-5 w-5 flex-none text-secondary/50 dark:text-accent/50" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35" />
            <circle cx="11" cy="11" r="6" />
          </svg>
          <input
            type="text"
            value={businessTypeQuery}
            onChange={(event) => setBusinessTypeQuery(event.target.value)}
            placeholder={content.questions.businessType.helper}
            className="w-full bg-transparent text-sm text-secondary outline-none placeholder:text-secondary/45 dark:text-accent dark:placeholder:text-accent/45"
          />
        </div>
        <div
          data-planfinder-scrollable="true"
          onWheelCapture={handleContainedWheel}
          className="mt-4 max-h-[420px] overflow-y-auto overscroll-contain pr-1"
        >
          <div className="space-y-2">
            {filteredBusinessTypeOptions.map((option) => {
              const optionValue = getOptionValue(option);
              const optionLabel = getOptionLabel(option);
              const selected = answers.businessType === optionValue;
              return (
                <button
                  key={optionValue}
                  type="button"
                  onClick={() => setAnswer('businessType', optionValue)}
                  className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left transition ${
                    selected
                      ? 'border-primary bg-primary/10 shadow-[0_12px_28px_rgba(21,101,216,0.12)]'
                      : 'border-stroke-2 bg-white hover:border-primary/60 hover:shadow-[0_12px_28px_rgba(15,23,42,0.06)] dark:border-stroke-7 dark:bg-background-8'
                  }`}
                >
                  <span className="font-medium text-secondary dark:text-white">{optionLabel}</span>
                  {selected ? (
                    <span className="inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                      ✓
                    </span>
                  ) : null}
                </button>
              );
            })}
            {filteredBusinessTypeOptions.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-stroke-2 px-4 py-6 text-sm text-secondary/65 dark:border-stroke-7 dark:text-accent/65">
                {content.questions.businessType.noResults}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );

  const setupScopeHint = (
    <div className="rounded-2xl border border-primary/15 bg-primary/5 p-4 text-sm leading-6 text-secondary/75 dark:text-accent/75">
      {content.setupScopeHint}
    </div>
  );

  const renderStep = () => {
    switch (currentStep?.key) {
      case 'businessType':
        return renderBusinessTypeSelector();
      case 'teamSize':
        return (
          <div className="space-y-5">
            <div>
              <h3 className="text-heading-4">{content.questions.teamSize.label}</h3>
              <p className="mt-2 text-sm leading-6 text-secondary/70 dark:text-accent/70">
                {content.questions.teamSize.helper}
              </p>
            </div>
            {renderCards({
              options: content.questions.teamSize.options,
              value: answers.teamSize,
              onSelect: (value) => setAnswer('teamSize', value),
            })}
          </div>
        );
      case 'needs':
        return (
          <div className="space-y-5">
            <div>
              <h3 className="text-heading-4">{content.questions.needs.label}</h3>
              <p className="mt-2 text-sm leading-6 text-secondary/70 dark:text-accent/70">
                {content.questions.needs.helper}
              </p>
              <p className="mt-2 text-sm leading-6 text-secondary/70 dark:text-accent/70">
                {content.questions.needs.websiteOnlyHint}
              </p>
            </div>
            <div className="space-y-5">
              {content.questions.needs.sections.map((section) => (
                <div key={section.title} className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary/65 dark:text-accent/65">
                    {section.title}
                  </p>
                  {renderCards({
                    options: section.options,
                    value: answers.needs,
                    multi: true,
                    onSelect: toggleNeed,
                  })}
                </div>
              ))}
            </div>
          </div>
        );
      case 'websiteNeed':
        return (
          <div className="space-y-5">
            <div>
              <h3 className="text-heading-4">{content.questions.websiteNeed.label}</h3>
              <p className="mt-2 text-sm leading-6 text-secondary/70 dark:text-accent/70">
                {content.questions.websiteNeed.helper}
              </p>
            </div>
            {renderCards({
              options: content.questions.websiteNeed.options,
              value: answers.websiteNeed,
              onSelect: (value) => setAnswer('websiteNeed', value),
            })}
          </div>
        );
      case 'setupPreference':
        return (
          <div className="space-y-5">
            <div>
              <h3 className="text-heading-4">{content.questions.setupPreference.label}</h3>
              <p className="mt-2 text-sm leading-6 text-secondary/70 dark:text-accent/70">
                {content.questions.setupPreference.helper}
              </p>
            </div>
            {renderCards({
              options: content.questions.setupPreference.options,
              value: answers.setupPreference,
              onSelect: (value) => setAnswer('setupPreference', value),
            })}
          </div>
        );
      case 'pageCount':
        return (
          <div className="space-y-5">
            <div>
              <h3 className="text-heading-4">{content.questions.pageCount.label}</h3>
              <p className="mt-2 text-sm leading-6 text-secondary/70 dark:text-accent/70">
                {content.questions.pageCount.helper}
              </p>
            </div>
            {setupScopeHint}
            {renderCards({
              options: content.questions.pageCount.options,
              value: answers.pageCount,
              onSelect: (value) => setAnswer('pageCount', value),
            })}
          </div>
        );
      case 'contentComplexity':
        return (
          <div className="space-y-5">
            <div>
              <h3 className="text-heading-4">{content.questions.contentComplexity.label}</h3>
              <p className="mt-2 text-sm leading-6 text-secondary/70 dark:text-accent/70">
                {content.questions.contentComplexity.helper}
              </p>
            </div>
            {setupScopeHint}
            {renderCards({
              options: content.questions.contentComplexity.options,
              value: answers.contentComplexity,
              onSelect: (value) => setAnswer('contentComplexity', value),
            })}
          </div>
        );
      case 'recommendation':
        return recommendation && recommendedPlan ? (
          <div className="space-y-6">
            <div>
              <h3 className="text-heading-3">{content.final.title}</h3>
              <p className="mt-2 text-sm leading-6 text-secondary/70 dark:text-accent/70">{content.final.subtitle}</p>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              <article className="rounded-3xl border border-primary/15 bg-white p-6 dark:border-primary/20 dark:bg-background-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary/60 dark:text-accent/60">
                  {content.final.monthlyPlanLabel}
                </p>
                <h4 className="mt-3 text-heading-4">{recommendedPlan.name}</h4>
                <p className="mt-2 text-heading-5 text-secondary dark:text-white">{recommendedPlan.price}</p>
                <p className="mt-1 text-sm font-medium text-secondary/70 dark:text-accent/70">
                  {content.final.monthlySubscriptionLabel}
                </p>
                <p className="mt-4 text-sm leading-6 text-secondary/80 dark:text-accent/80">
                  {recommendedPlan.description}
                </p>
                <div className="mt-4 rounded-2xl bg-background-3 p-4 text-sm leading-6 text-secondary/75 dark:bg-background-6 dark:text-accent/75">
                  <p className="font-semibold text-secondary dark:text-white">{content.final.whyLabel}</p>
                  <p className="mt-1">{recommendation.reason}</p>
                </div>
                <a href={planHrefFor(recommendedPlan.key)} className="btn btn-secondary btn-md mt-5 block w-full text-center">
                  {replaceTemplate(content.final.startTrialTemplate, { plan: recommendedPlan.name })}
                </a>
                <p className="mt-3 text-xs leading-5 text-secondary/65 dark:text-accent/65">{content.final.startTrialNote}</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a href={`#plan-${recommendedPlan.key}`} onClick={close} className="text-sm font-medium text-primary underline-offset-4 hover:underline">
                    {replaceTemplate(content.final.viewPlanTemplate, { plan: recommendedPlan.name })}
                  </a>
                  <Link href={withLocalePath('/contact', locale)} className="text-sm font-medium text-primary underline-offset-4 hover:underline">
                    {content.final.talkToSales}
                  </Link>
                </div>
              </article>

              <article className="rounded-3xl border border-stroke-2 bg-white p-6 dark:border-stroke-7 dark:bg-background-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary/60 dark:text-accent/60">
                  {content.final.optionalSetupLabel}
                </p>
                {recommendedSetup ? (
                  <>
                    <h4 className="mt-3 text-heading-4">{recommendedSetup.name}</h4>
                    <p className="mt-2 text-heading-5 text-secondary dark:text-white">{recommendedSetup.price}</p>
                    <p className="mt-1 text-sm font-medium text-secondary/70 dark:text-accent/70">
                      {recommendedSetup.priceNote}
                    </p>
                    <p className="mt-4 text-sm leading-6 text-secondary/80 dark:text-accent/80">
                      {recommendedSetup.description}
                    </p>
                    <div className="mt-4 rounded-2xl bg-background-3 p-4 text-sm leading-6 text-secondary/75 dark:bg-background-6 dark:text-accent/75">
                      <p className="font-semibold text-secondary dark:text-white">{content.final.whyLabel}</p>
                      <p className="mt-1">{recommendation.setupReason}</p>
                    </div>
                    {recommendedSetup.key === 'basic' ? (
                      <a href={basicSetupHref} className="btn btn-primary btn-md mt-5 block w-full text-center">
                        {recommendedSetup.ctaLabel}
                      </a>
                    ) : recommendedSetup.key === 'growth' ? (
                      <Link href={growthSetupHref} className="btn btn-primary btn-md mt-5 block w-full text-center">
                        {recommendedSetup.ctaLabel}
                      </Link>
                    ) : (
                      <Link href={premiumSetupHref} className="btn btn-primary btn-md mt-5 block w-full text-center">
                        {recommendedSetup.ctaLabel}
                      </Link>
                    )}
                    <p className="mt-3 text-xs leading-5 text-secondary/65 dark:text-accent/65">
                      {content.final.activeSubscriptionNote}
                    </p>
                    <p className="mt-3 text-xs leading-5 text-secondary/65 dark:text-accent/65">
                      {content.final.scopeConfirmedNote}
                    </p>
                  </>
                ) : (
                  <>
                    <h4 className="mt-3 text-heading-4">{content.final.noSetupTitle}</h4>
                    <p className="mt-2 text-heading-5 text-secondary dark:text-white">{content.final.noSetupPrice}</p>
                    <p className="mt-1 text-sm font-medium text-secondary/70 dark:text-accent/70">
                      {content.final.includedWithPlan}
                    </p>
                    <p className="mt-4 text-sm leading-6 text-secondary/80 dark:text-accent/80">
                      {content.final.noSetupDescription}
                    </p>
                  </>
                )}
              </article>
            </div>

            <div className="rounded-3xl border border-stroke-2 bg-background-3 p-5 dark:border-stroke-7 dark:bg-background-6">
              <p className="font-semibold text-secondary dark:text-white">{content.final.summaryTitle}</p>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-secondary/80 dark:text-accent/80">
                <li>{replaceTemplate(content.final.summaryMonthlyTemplate, { plan: recommendedPlan.name, price: recommendedPlan.price })}</li>
                {recommendedSetup ? (
                  <li>
                    {replaceTemplate(content.final.summaryOptionalSetupTemplate, {
                      setup: recommendedSetup.name,
                      price: recommendedSetup.price,
                    })}
                  </li>
                ) : (
                  <li>{content.final.summaryNoSetup}</li>
                )}
              </ul>
              <p className="mt-4 text-sm leading-6 text-secondary/75 dark:text-accent/75">
                {recommendedSetup ? content.final.recurringNote : content.final.addLaterNote}
              </p>
              <p className="mt-3 text-sm leading-6 text-secondary/75 dark:text-accent/75">{content.final.reassurance}</p>
              <p className="mt-3 text-sm leading-6 text-secondary/75 dark:text-accent/75">{guidance}</p>
            </div>
          </div>
        ) : null;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="rounded-3xl border border-stroke-2 bg-white p-6 dark:border-stroke-7 dark:bg-background-8">
        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <span className="badge badge-yellow-v2 mb-4">{content.badge}</span>
            <h2 className="text-heading-3">{content.title}</h2>
            <p className="mt-3 max-w-[760px] text-secondary/75 dark:text-accent/75">{content.subtitle}</p>
            <p className="mt-3 max-w-[760px] text-sm leading-6 text-secondary/70 dark:text-accent/70">{content.intro}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <button type="button" className="btn btn-secondary btn-md" onClick={resetAndOpen}>
              {content.startCta}
            </button>
            <a href={comparePlansHref} className="btn btn-white dark:btn-white-dark btn-md text-center">
              {content.compareCta}
            </a>
          </div>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-0 z-[110] overflow-hidden bg-slate-950/45" aria-hidden={!open}>
          <div className="absolute inset-0" onClick={close} />
          <div
            ref={dialogRef}
            onWheelCapture={handleContainedWheel}
            className="absolute inset-x-0 bottom-0 top-0 z-10 mx-auto flex w-full max-w-[920px] flex-col overflow-hidden bg-white shadow-2xl dark:bg-background-8 md:top-8 md:bottom-8 md:rounded-3xl"
            role="dialog"
            aria-modal="true"
            aria-label={content.title}
          >
            <div className="border-b border-stroke-2 px-4 py-4 dark:border-stroke-7 sm:px-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-secondary dark:text-accent">
                    {content.stepLabel} {stepIndex + 1} {content.ofLabel} {steps.length}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-secondary/65 dark:text-accent/65">{currentStep?.title}</p>
                </div>
                <button
                  type="button"
                  onClick={close}
                  className="rounded-full border border-stroke-2 px-3 py-1.5 text-sm font-medium text-secondary transition hover:bg-background-3 dark:border-stroke-7 dark:text-accent dark:hover:bg-background-7"
                >
                  {content.close}
                </button>
              </div>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-background-3 dark:bg-background-6">
                <div className="h-full rounded-full bg-primary transition-all duration-300" style={{ width: `${progress}%` }} />
              </div>
            </div>

            <div
              ref={contentScrollRef}
              data-planfinder-scrollable="true"
              className="flex-1 overflow-y-auto overscroll-contain px-4 py-6 sm:px-6 sm:py-7"
            >
              {renderStep()}
            </div>

            <div className="sticky bottom-0 border-t border-stroke-2 bg-white px-4 py-4 dark:border-stroke-7 dark:bg-background-8 sm:px-6">
              <div className="flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setStepIndex((prev) => Math.max(prev - 1, 0))}
                  disabled={stepIndex === 0}
                  className="rounded-full border border-stroke-2 px-5 py-2 text-sm font-medium text-secondary transition hover:bg-background-3 disabled:cursor-not-allowed disabled:opacity-40 dark:border-stroke-7 dark:text-accent dark:hover:bg-background-7"
                >
                  {content.back}
                </button>
                {isFinalStep ? (
                  <button type="button" onClick={close} className="btn btn-secondary btn-md">
                    {content.done}
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setStepIndex((prev) => Math.min(prev + 1, steps.length - 1))}
                    disabled={!canGoNext}
                    className="btn btn-secondary btn-md disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    {content.next}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
