new Vue({
  el: '#app',
  data: {
    tasks: [],
    newTask: {
      text: '',
      completed: false,
      deadline: '',
      reminder: '',
      category: ''
    },
    searchText: ''
  },
  methods: {
    addTask() {
      if (this.newTask.text.trim() !== '') {
        this.tasks.push({ ...this.newTask });
        this.newTask = { text: '', completed: false, deadline: '', reminder: '', category: '' };
      }
    },
    clearAll() {
      this.tasks = [];
    },
    filterTasks(status) {
      if (status === 'all') {
        
        this.filteredTasks = this.tasks;
      } else {
        
        this.filteredTasks = this.tasks.filter(task => {
          return status === 'active' ? !task.completed : task.completed;
        });
      }
    },
    sortTasksByDeadline() {
      this.tasks.sort((a, b) => {
        if (a.deadline && b.deadline) {
          return new Date(a.deadline) - new Date(b.deadline);
        } else if (a.deadline) {
          return -1;
        } else if (b.deadline) {
          return 1;
        } else {
          return 0;
        }
      });
    },
    enableEditMode(task, index) {
     
    }
  },
  computed: {
    filteredTasks() {
      return this.tasks.filter(task => {
        return task.text.toLowerCase().includes(this.searchText.toLowerCase());
      });
    }
  }
});
