export type Subject = "العربية" | "تاريخ الأردن" | "الرياضيات" | "التربية الإسلامية";
export type TaskStatus = "لم تبدأ" | "قيد التنفيذ" | "مكتملة" | "متأخرة";
export type Phase = "إنهاء المناهج" | "المراجعة والراحة";

export type Task = {
  id: string;
  sourceKey: string;
  subject: Subject;
  unit: string;
  lesson?: string;
  title: string;
  durationMinutes: number;
  scheduledDate: string | null;
  startTime?: string;
  endTime?: string;
  status: TaskStatus;
  phase: Phase;
  order: number;
  splittable?: boolean;
  segmentIndex?: number;
  segmentCount?: number;
  manualOverride?: boolean;
};

export type ScheduleWarning = { title: string; detail: string; severity: "warning" | "info" };

export const PLAN_START = "2026-11-19";
export const CONTENT_END = "2026-12-12";
export const PLAN_END = "2026-12-15";
export const FINISH_CAPACITY = 390;
export const REVIEW_CAPACITY = 240;

const arabic: Array<Omit<Task, "id" | "scheduledDate" | "status" | "phase">> = [
  { sourceKey: "ar-u4-num-j7", subject: "العربية", unit: "الوحدة الرابعة: الإعلام", lesson: "العدد", title: "إكمال النصف المتبقي من حصة العدد ج7", durationMinutes: 17.5, order: 1 },
  { sourceKey: "ar-u4-num-j8", subject: "العربية", unit: "الوحدة الرابعة: الإعلام", lesson: "العدد", title: "العدد ج8", durationMinutes: 35, order: 2 },
  { sourceKey: "ar-u4-num-q", subject: "العربية", unit: "الوحدة الرابعة: الإعلام", lesson: "العدد", title: "حل أسئلة العدد", durationMinutes: 35, order: 3 },
  { sourceKey: "ar-u4-num-sheet", subject: "العربية", unit: "الوحدة الرابعة: الإعلام", lesson: "العدد", title: "حل ورقة عمل العدد", durationMinutes: 35, order: 4 },
  ...Array.from({ length: 6 }, (_, i) => ({ sourceKey: `ar-u4-read-${i + 1}`, subject: "العربية" as const, unit: "الوحدة الرابعة: الإعلام", lesson: "الإعلام ومشروع النهوض باللغة العربية", title: `القراءة «الإعلام ومشروع النهوض باللغة العربية» — الحصة ${i + 1}`, durationMinutes: 45, order: 5 + i })),
  { sourceKey: "ar-u4-expr", subject: "العربية", unit: "الوحدة الرابعة: الإعلام", title: "كتابة تعبير الوحدة", durationMinutes: 15, order: 11 },
  { sourceKey: "ar-u4-exam", subject: "العربية", unit: "الوحدة الرابعة: الإعلام", title: "امتحان الوحدة الرابعة", durationMinutes: 30, order: 12 },
  ...Array.from({ length: 4 }, (_, i) => ({ sourceKey: `ar-u5-ma-${i + 1}`, subject: "العربية" as const, unit: "الوحدة الخامسة: من الأدب الواقعي", lesson: "أنواع ما", title: `أنواع ما — الحصة ${i + 1}`, durationMinutes: 35, order: 13 + i })),
  { sourceKey: "ar-u5-ma-q", subject: "العربية", unit: "الوحدة الخامسة: من الأدب الواقعي", lesson: "أنواع ما", title: "حل أسئلة أنواع ما", durationMinutes: 35, order: 17 },
  { sourceKey: "ar-u5-ma-sheet", subject: "العربية", unit: "الوحدة الخامسة: من الأدب الواقعي", lesson: "أنواع ما", title: "حل أوراق العمل", durationMinutes: 35, order: 18 },
  ...Array.from({ length: 6 }, (_, i) => ({ sourceKey: `ar-u5-read-${i + 1}`, subject: "العربية" as const, unit: "الوحدة الخامسة: من الأدب الواقعي", lesson: "الضحك في آخر الليل", title: `القراءة «الضحك في آخر الليل» — الحصة ${i + 1}`, durationMinutes: 45, order: 19 + i })),
  { sourceKey: "ar-u5-expr", subject: "العربية", unit: "الوحدة الخامسة: من الأدب الواقعي", title: "كتابة تعبير الوحدة", durationMinutes: 15, order: 25 },
  { sourceKey: "ar-u5-exam", subject: "العربية", unit: "الوحدة الخامسة: من الأدب الواقعي", title: "امتحان الوحدة الخامسة", durationMinutes: 30, order: 26 },
  { sourceKey: "ar-final-review", subject: "العربية", unit: "المراجعة النهائية للعربي", title: "مراجعة الكتاب كاملًا", durationMinutes: 300, order: 27, splittable: true },
  { sourceKey: "ar-final-exam", subject: "العربية", unit: "المراجعة النهائية للعربي", title: "امتحان الفصل الأول الشامل", durationMinutes: 60, order: 28 },
];

const jordan: Array<Omit<Task, "id" | "scheduledDate" | "status" | "phase">> = [
  { sourceKey: "jo-u1-review", subject: "تاريخ الأردن", unit: "الوحدة الأولى: الأردن في العصور القديمة", title: "مراجعة الوحدة الأولى", durationMinutes: 180, order: 29 },
  { sourceKey: "jo-u1-exam", subject: "تاريخ الأردن", unit: "الوحدة الأولى: الأردن في العصور القديمة", title: "امتحان الوحدة الأولى", durationMinutes: 30, order: 30 },
  { sourceKey: "jo-u2-review", subject: "تاريخ الأردن", unit: "الوحدة الثانية: الأردن في العصور الإسلامية", title: "مراجعة الوحدة الثانية", durationMinutes: 180, order: 31 },
  { sourceKey: "jo-u2-exam", subject: "تاريخ الأردن", unit: "الوحدة الثانية: الأردن في العصور الإسلامية", title: "امتحان الوحدة الثانية", durationMinutes: 30, order: 32 },
  ...[
    "الأوضاع السياسية والإدارية في الأردن في العهد العثماني",
    "الأوضاع الاجتماعية والاقتصادية في الأردن في العهد العثماني",
    "الثورة العربية الكبرى (النهضة العربية)",
    "الأردن في عهد المملكة العربية السورية والحكومات المحلية",
  ].flatMap((lesson, i) => [
    { sourceKey: `jo-u3-l${i + 1}-a`, subject: "تاريخ الأردن" as const, unit: "الوحدة الثالثة: الأردن في العصر الحديث", lesson, title: `${lesson} — الحصة الأولى`, durationMinutes: 90, order: 33 + i * 3 },
    { sourceKey: `jo-u3-l${i + 1}-b`, subject: "تاريخ الأردن" as const, unit: "الوحدة الثالثة: الأردن في العصر الحديث", lesson, title: `${lesson} — الحصة الثانية`, durationMinutes: 90, order: 34 + i * 3 },
    { sourceKey: `jo-u3-l${i + 1}-exam`, subject: "تاريخ الأردن" as const, unit: "الوحدة الثالثة: الأردن في العصر الحديث", lesson, title: `امتحان الدرس: ${lesson}`, durationMinutes: 10, order: 35 + i * 3 },
  ]),
  { sourceKey: "jo-u3-review", subject: "تاريخ الأردن", unit: "الوحدة الثالثة: الأردن في العصر الحديث", title: "مراجعة الوحدة الثالثة", durationMinutes: 180, order: 45 },
  { sourceKey: "jo-u3-exam", subject: "تاريخ الأردن", unit: "الوحدة الثالثة: الأردن في العصر الحديث", title: "امتحان الوحدة الثالثة", durationMinutes: 30, order: 46 },
  { sourceKey: "jo-final-review", subject: "تاريخ الأردن", unit: "المراجعة النهائية لتاريخ الأردن", title: "مراجعة الكتاب كاملًا", durationMinutes: 240, order: 47, splittable: true },
  { sourceKey: "jo-final-exam", subject: "تاريخ الأردن", unit: "المراجعة النهائية لتاريخ الأردن", title: "امتحان الفصل الأول الشامل", durationMinutes: 40, order: 48 },
];

const math: Array<Omit<Task, "id" | "scheduledDate" | "status" | "phase">> = [
  { sourceKey: "math-u1", subject: "الرياضيات", unit: "الوحدة الأولى", title: "مراجعة الوحدة الأولى — جلسة يومية", durationMinutes: 930, order: 49, splittable: true },
  { sourceKey: "math-u2", subject: "الرياضيات", unit: "الوحدة الثانية", title: "مراجعة الوحدة الثانية — جلسة يومية", durationMinutes: 900, order: 50, splittable: true },
  { sourceKey: "math-u3", subject: "الرياضيات", unit: "الوحدة الثالثة", title: "دراسة الوحدة الثالثة — جلسة يومية", durationMinutes: 3600, order: 51, splittable: true },
];

const review: Array<Omit<Task, "id" | "scheduledDate" | "status" | "phase">> = Array.from({ length: 3 }, (_, dayIndex) =>
  ["العربية", "تاريخ الأردن", "الرياضيات", "التربية الإسلامية"].map((subject, subjectIndex) => ({
    sourceKey: `review-${dayIndex + 1}-${subjectIndex + 1}`,
    subject: subject as Subject,
    unit: "مراجعة خفيفة",
    title: `مراجعة خفيفة — ${subject}`,
    durationMinutes: 60,
    order: 100 + dayIndex * 4 + subjectIndex,
  })),
).flat();

export function seedTemplates(): Array<Omit<Task, "id" | "scheduledDate" | "status" | "phase">> {
  return [...arabic, ...jordan, ...math, ...review];
}

const dateKeys = (from: string, to: string) => {
  const dates: string[] = [];
  for (let d = new Date(`${from}T12:00:00`); d <= new Date(`${to}T12:00:00`); d.setDate(d.getDate() + 1)) dates.push(d.toISOString().slice(0, 10));
  return dates;
};

const minutesToTime = (minutes: number) => {
  const h = Math.floor(minutes / 60).toString().padStart(2, "0");
  const m = Math.round(minutes % 60).toString().padStart(2, "0");
  return `${h}:${m}`;
};

export function formatDuration(minutes: number) {
  const hours = Math.floor(minutes / 60);
  const mins = Math.round(minutes % 60);
  return hours ? `${hours}س ${mins ? `${mins}د` : ""}`.trim() : `${mins}د`;
}

export function capacityWarnings(tasks: Task[]): ScheduleWarning[] {
  const warnings: ScheduleWarning[] = [];
  const totals = new Map<string, number>();
  for (const task of tasks) {
    if (!task.scheduledDate) continue;
    totals.set(task.scheduledDate, (totals.get(task.scheduledDate) ?? 0) + task.durationMinutes);
  }
  for (const [date, minutes] of totals) {
    const limit = date >= "2026-12-13" ? REVIEW_CAPACITY : FINISH_CAPACITY;
    if (minutes > limit) {
      warnings.push({
        title: `السعة اليومية متجاوزة في ${date}`,
        detail: `المهام المسجلة لهذا اليوم تساوي ${formatDuration(minutes)} مقابل حد ${formatDuration(limit)}. لم يتم حذف أي مهمة؛ راجع التعديل اليدوي أو أعد التوزيع.`,
        severity: "warning",
      });
    }
  }
  return warnings;
}

export function scheduleTasks(previous?: Task[]): { tasks: Task[]; warnings: ScheduleWarning[] } {
  const previousByKey = new Map((previous ?? []).map((task) => [`${task.sourceKey}:${task.segmentIndex ?? 0}`, task]));
  const warnings: ScheduleWarning[] = [];
  const output: Task[] = [];
  const finishDates = dateKeys(PLAN_START, CONTENT_END);
  let dateIndex = 0;
  let usedToday = 0;
  let expectedEnd = PLAN_START;

  const nextDay = () => { dateIndex += 1; usedToday = 0; };
  const place = (template: Omit<Task, "id" | "scheduledDate" | "status" | "phase">, duration: number, segmentIndex = 0, segmentCount = 1) => {
    const key = `${template.sourceKey}:${segmentIndex}`;
    const old = previousByKey.get(key);
    const date = finishDates[Math.min(dateIndex, finishDates.length - 1)];
    const start = 8 * 60 + usedToday;
    const end = start + duration;
    const task: Task = old?.manualOverride ? old : {
      ...template,
      id: old?.id ?? `${template.sourceKey}-${segmentIndex}-${date}`,
      scheduledDate: date,
      durationMinutes: duration,
      startTime: minutesToTime(start),
      endTime: minutesToTime(end),
      status: old?.status ?? "لم تبدأ",
      phase: "إنهاء المناهج",
      segmentIndex,
      segmentCount,
      manualOverride: old?.manualOverride,
    };
    output.push(task);
    usedToday += duration;
    expectedEnd = date;
    if (usedToday >= FINISH_CAPACITY - 0.01) nextDay();
  };

  for (const template of [...arabic, ...jordan, ...math]) {
    let remaining = template.durationMinutes;
    let segmentIndex = 0;
    if (!template.splittable) {
      if (usedToday > 0 && usedToday + remaining > FINISH_CAPACITY) nextDay();
      place(template, remaining);
      continue;
    }
    const segmentCount = Math.max(1, Math.ceil(remaining / FINISH_CAPACITY));
    while (remaining > 0.01) {
      if (dateIndex >= finishDates.length) break;
      const available = FINISH_CAPACITY - usedToday;
      if (available < 1) { nextDay(); continue; }
      const chunk = Math.min(remaining, available);
      place(template, chunk, segmentIndex, segmentCount);
      remaining -= chunk;
      segmentIndex += 1;
      if (remaining > 0.01 && usedToday > 0) nextDay();
    }
  }

  const jordanMinutes = jordan.reduce((sum, task) => sum + task.durationMinutes, 0);
  if (jordanMinutes !== 27 * 60 + 50) warnings.push({ title: "تنبيه في بيانات تاريخ الأردن", detail: `تفاصيل المهام تساوي ${formatDuration(jordanMinutes)} بينما المجموع المذكور هو 27س 50د. لم يتم حذف أو تغيير أي مدة؛ لذلك قد يتجاوز تاريخ الأردن موعده المستهدف.`, severity: "warning" });
  const targetEndBySubject: Record<string, string> = { العربية: "2026-11-22", "تاريخ الأردن": "2026-11-27", الرياضيات: CONTENT_END };
  for (const subject of ["العربية", "تاريخ الأردن", "الرياضيات"] as const) {
    const last = output.filter((task) => task.subject === subject).map((task) => task.scheduledDate ?? "").sort().at(-1);
    if (last && last > targetEndBySubject[subject]) warnings.push({ title: `موعد ${subject} يحتاج انتباهًا`, detail: `وفق المدد الحالية ينتهي هذا الجزء في ${last} بدل الموعد المستهدف ${targetEndBySubject[subject]}.`, severity: "warning" });
  }
  const lastContentDate = output.filter((task) => task.phase === "إنهاء المناهج").map((task) => task.scheduledDate ?? "").sort().at(-1) ?? expectedEnd;
  if (lastContentDate > CONTENT_END) warnings.push({ title: "تعذّر إنهاء كل المهام الأساسية ضمن 12/12", detail: `الجدول الحالي يمتد حتى ${lastContentDate}. راجع المدد أو التواريخ من الإعدادات؛ لم يتم حذف أي مهمة.`, severity: "warning" });

  const reviewDates = dateKeys("2026-12-13", PLAN_END);
  const reviewTemplates = review.filter((task) => task.durationMinutes > 0);
  reviewTemplates.forEach((template, index) => {
    const date = reviewDates[Math.floor(index / 4)];
    const key = `${template.sourceKey}:0`;
    const old = previousByKey.get(key);
    output.push(old?.manualOverride ? old : { ...template, id: old?.id ?? `${template.sourceKey}-${date}`, scheduledDate: date, startTime: minutesToTime(9 * 60 + (index % 4) * 60), endTime: minutesToTime(10 * 60 + (index % 4) * 60), status: old?.status ?? "لم تبدأ", phase: "المراجعة والراحة", segmentIndex: 0, segmentCount: 1, manualOverride: old?.manualOverride });
  });
  const generatedKeys = new Set(output.map((task) => `${task.sourceKey}:${task.segmentIndex ?? 0}`));
  const preservedCustomTasks = (previous ?? []).filter((task) => task.manualOverride && !generatedKeys.has(`${task.sourceKey}:${task.segmentIndex ?? 0}`));
  const finalTasks = [...output, ...preservedCustomTasks];
  warnings.push(...capacityWarnings(finalTasks));
  return { tasks: finalTasks, warnings };
}

export function taskTotal(tasks: Task[]) { return tasks.reduce((sum, task) => sum + task.durationMinutes, 0); }
export function subjectMinutes(tasks: Task[], subject: Subject) { return tasks.filter((task) => task.subject === subject).reduce((sum, task) => sum + task.durationMinutes, 0); }
export function dateLabel(key: string) { return new Intl.DateTimeFormat("ar-JO", { weekday: "long", day: "numeric", month: "long" }).format(new Date(`${key}T12:00:00`)); }
export function isLate(task: Task, today = new Date().toISOString().slice(0, 10)) { return task.status !== "مكتملة" && !!task.scheduledDate && task.scheduledDate < today; }
