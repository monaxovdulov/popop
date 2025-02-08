import { ChevronRight } from "lucide-react";

interface Task {
  id: number;
  title: string;
  reward: number;
  link?: string;
}

const generalTasks: Task[] = [
  { id: 1, title: "Join Telegram channel", reward: 100 },
  { id: 2, title: "Join Facebook", reward: 100 },
  { id: 3, title: "Join Instagram", reward: 100 },
  { id: 4, title: "Join Instagram", reward: 100 },
];

const dailyTasks: Task[] = [
  { id: 1, title: "Check-in on ton blockchain", reward: 500 },
  { id: 2, title: "Daily question", reward: 100 },
  { id: 3, title: "Earn 300 tokens", reward: 100 },
  { id: 4, title: "Like post", reward: 100 },
];

const TaskCard = ({ task }: { task: Task }) => {
  return (
    <button className="w-full bg-black/40 backdrop-blur-md rounded-2xl p-4 flex items-center justify-between hover:bg-black/50 transition-colors">
      <span className="text-white/90">{task.title}</span>
      <div className="flex items-center gap-3">
        <span className="text-white/90">+${task.reward}</span>
        <ChevronRight className="w-5 h-5 text-white/60" />
      </div>
    </button>
  );
};

const TaskSection = ({ title, tasks }: { title: string; tasks: Task[] }) => {
  return (
    <div className="space-y-3">
      <h2 className="text-lg font-medium text-black">{title}</h2>
      <div className="space-y-2">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export const TasksPage = () => {
  return (
    <div className="space-y-8 px-4">
      <TaskSection title="General tasks" tasks={generalTasks} />
      <TaskSection title="Daily tasks" tasks={dailyTasks} />
    </div>
  );
}; 