import type { Task } from "./scheduler";

export type StudySession = { id: string; date: string; durationMinutes: number; taskTitle?: string };
export type AppState = { profile: { name: string; dailyGoal: number; darkMode: boolean; accent: string }; tasks: Task[]; sessions: StudySession[]; warnings: { title: string; detail: string; severity: "warning" | "info" }[]; hasGenerated: boolean };

export const STORAGE_KEY = "khotwa-study-state-v1";
export const defaultState: AppState = { profile: { name: "يامن", dailyGoal: 6.5, darkMode: false, accent: "#2563eb" }, tasks: [], sessions: [], warnings: [], hasGenerated: false };

export function loadState(): AppState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState;
    return { ...defaultState, ...JSON.parse(raw), profile: { ...defaultState.profile, ...JSON.parse(raw).profile } };
  } catch { return defaultState; }
}
export function saveState(state: AppState) { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
export function downloadBackup(state: AppState) {
  const blob = new Blob([JSON.stringify({ exportedAt: new Date().toISOString(), app: "خُطوة", state }, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob); const a = document.createElement("a"); a.href = url; a.download = `khotwa-backup-${new Date().toISOString().slice(0, 10)}.json`; a.click(); URL.revokeObjectURL(url);
}
export function parseBackup(file: File): Promise<AppState> { return file.text().then((raw) => { const parsed = JSON.parse(raw); const state = parsed.state ?? parsed; if (!state.tasks || !state.profile) throw new Error("ملف النسخة الاحتياطية غير صالح"); return state; }); }
