import { ChevronRight, Check, Coins, Zap } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface Task {
  id: number;
  title: string;
  reward: number;
  description?: string;
  benefits?: Array<{
    icon: "coins" | "farm";
    text: string;
  }>;
  completed?: boolean;
  link?: string;
  type: 'general' | 'daily';
}

const generalTasks: Task[] = [
  { id: 1, title: "Join Telegram channel", reward: 100, type: 'general' },
  { id: 2, title: "Join Facebook", reward: 100, type: 'general' },
  { id: 3, title: "Join Instagram", reward: 100, type: 'general' },
  { id: 4, title: "Join Instagram", reward: 100, type: 'general' },
];

const dailyTasks: Task[] = [
  { 
    id: 1, 
    title: "Check-in on TON blockchain", 
    reward: 500,
    type: 'daily',
    description: "Make a small daily TON transaction (just a few cents) and receive massive rewards!",
    benefits: [
      { icon: "coins", text: "500 Coins" },
      { icon: "farm", text: "Daily farm" }
    ]
  },
  { id: 2, title: "Daily question", reward: 100, type: 'daily' },
  { id: 3, title: "Earn 300 tokens", reward: 100, type: 'daily' },
  { id: 4, title: "Like post", reward: 100, type: 'daily' },
];

const TaskModal = ({ 
  task, 
  open, 
  onClose,
  onComplete 
}: { 
  task: Task; 
  open: boolean; 
  onClose: () => void;
  onComplete: () => void;
}) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-[#1a1b1f] border-none text-white sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-center">
            {task.title}
          </DialogTitle>
        </DialogHeader>
        
        {task.description && (
          <p className="text-center text-white/70">
            {task.description}
          </p>
        )}

        {task.benefits && (
          <div className="grid grid-cols-2 gap-4 mt-4">
            {task.benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-purple-900/30 rounded-xl p-4 flex flex-col items-center gap-2"
              >
                {benefit.icon === "coins" ? (
                  <Coins className="w-8 h-8 text-yellow-400" />
                ) : (
                  <Zap className="w-8 h-8 text-purple-400" />
                )}
                <span className="text-sm font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>
        )}

        <Button 
          className="w-full mt-4 bg-purple-600 hover:bg-purple-700"
          onClick={onComplete}
        >
          Complete transaction
        </Button>
      </DialogContent>
    </Dialog>
  );
};

const TaskCard = ({ 
  task,
  onComplete 
}: { 
  task: Task;
  onComplete: (task: Task) => void;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button 
        className={`w-full backdrop-blur-md rounded-2xl p-4 flex items-center justify-between transition-colors ${
          task.completed 
            ? "bg-green-500/10 hover:bg-green-500/20" 
            : "bg-black/40 hover:bg-black/50"
        }`}
        onClick={() => setIsModalOpen(true)}
      >
        <span className={`flex items-center gap-2 ${task.completed ? "text-green-500" : "text-white/90"}`}>
          {task.completed && <Check className="w-5 h-5" />}
          {task.title}
        </span>
        <div className="flex items-center gap-3">
          <span className={task.completed ? "text-green-500" : "text-white/90"}>
            +${task.reward}
          </span>
          <ChevronRight className={`w-5 h-5 ${task.completed ? "text-green-500" : "text-white/60"}`} />
        </div>
      </button>

      <TaskModal 
        task={task}
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onComplete={() => {
          setIsModalOpen(false);
          onComplete(task);
        }}
      />
    </>
  );
};

const TaskSection = ({ 
  title, 
  tasks,
  onTaskComplete 
}: { 
  title: string; 
  tasks: Task[];
  onTaskComplete: (task: Task) => void;
}) => {
  return (
    <div className="space-y-3">
      <h2 className="text-lg font-medium text-black">{title}</h2>
      <div className="space-y-2">
        {tasks.map((task) => (
          <TaskCard 
            key={task.id} 
            task={task}
            onComplete={onTaskComplete}
          />
        ))}
      </div>
    </div>
  );
};

export const TasksPage = () => {
  const [tasks, setTasks] = useState({
    general: generalTasks,
    daily: dailyTasks
  });
  const { toast } = useToast();

  const handleTaskComplete = (task: Task) => {
    setTasks(prev => ({
      ...prev,
      [task.type]: prev[task.type].map(t => 
        t.id === task.id ? { ...t, completed: true } : t
      )
    }));

    toast({
      variant: "success",
      title: "The task is completed!",
      duration: 2000
    });
  };

  return (
    <div className="space-y-8 px-4">
      <TaskSection 
        title="General tasks" 
        tasks={tasks.general}
        onTaskComplete={handleTaskComplete}
      />
      <TaskSection 
        title="Daily tasks" 
        tasks={tasks.daily}
        onTaskComplete={handleTaskComplete}
      />
    </div>
  );
}; 