interface ITodo {
  id: string;
  task: string;
  completed: boolean;
}

type Filter = 'all' | 'active' | 'completed';
