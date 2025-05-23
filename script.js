class TodoApp {
    constructor() {
        this.tasks = [];
        this.currentFilter = 'all';
        this.editingTaskId = null;
        
        this.initializeElements();
        this.bindEvents();
        this.loadTasks();
        this.render();
    }

    initializeElements() {
        // Input elements
        this.newTaskInput = document.getElementById('newTaskInput');
        this.addTaskBtn = document.getElementById('addTaskBtn');
        this.editTaskInput = document.getElementById('editTaskInput');
        
        // Display elements
        this.tasksList = document.getElementById('tasksList');
        this.emptyState = document.getElementById('emptyState');
        this.emptyMessage = document.getElementById('emptyMessage');
        
        // Filter elements
        this.filterBtns = document.querySelectorAll('.filter-btn');
        
        // Action buttons
        this.actionButtons = document.getElementById('actionButtons');
        this.clearCompletedBtn = document.getElementById('clearCompletedBtn');
        this.clearAllBtn = document.getElementById('clearAllBtn');
        
        // Stats elements
        this.activeCount = document.getElementById('activeCount');
        this.completedCount = document.getElementById('completedCount');
        this.totalCount = document.getElementById('totalCount');
        this.completedCountBtn = document.getElementById('completedCountBtn');
        
        // Modal elements
        this.editModal = document.getElementById('editModal');
        this.saveEditBtn = document.getElementById('saveEditBtn');
        this.cancelEditBtn = document.getElementById('cancelEditBtn');
    }

    bindEvents() {
        // Add task events
        this.addTaskBtn.addEventListener('click', () => this.addTask());
        this.newTaskInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addTask();
        });

        // Filter events
        this.filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.setFilter(e.target.dataset.filter);
            });
        });

        // Action button events
        this.clearCompletedBtn.addEventListener('click', () => this.clearCompleted());
        this.clearAllBtn.addEventListener('click', () => this.clearAll());

        // Edit modal events
        this.saveEditBtn.addEventListener('click', () => this.saveEdit());
        this.cancelEditBtn.addEventListener('click', () => this.cancelEdit());
        this.editTaskInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.saveEdit();
            if (e.key === 'Escape') this.cancelEdit();
        });

        // Close modal when clicking outside
        this.editModal.addEventListener('click', (e) => {
            if (e.target === this.editModal) this.cancelEdit();
        });
    }

    // Local Storage Methods
    saveTasks() {
        try {
            localStorage.setItem('todo-tasks', JSON.stringify(this.tasks));
        } catch (error) {
            console.error('Error saving tasks to localStorage:', error);
        }
    }

    loadTasks() {
        try {
            const savedTasks = localStorage.getItem('todo-tasks');
            if (savedTasks) {
                this.tasks = JSON.parse(savedTasks);
            }
        } catch (error) {
            console.error('Error loading tasks from localStorage:', error);
            this.tasks = [];
        }
    }

    // Task Management Methods
    addTask() {
        const text = this.newTaskInput.value.trim();
        if (!text) return;

        const task = {
            id: Date.now(),
            text: text,
            completed: false,
            createdAt: new Date().toISOString(),
            completedAt: null
        };

        this.tasks.push(task);
        this.newTaskInput.value = '';
        this.saveTasks();
        this.render();
    }

    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.saveTasks();
        this.render();
    }

    toggleComplete(id) {
        const taskIndex = this.tasks.findIndex(task => task.id === id);
        if (taskIndex === -1) return;

        const task = this.tasks[taskIndex];
        task.completed = !task.completed;
        task.completedAt = task.completed ? new Date().toISOString() : null;

        // Add completion animation
        const taskElement = document.querySelector(`[data-task-id="${id}"]`);
        if (taskElement) {
            taskElement.classList.add('completing');
            setTimeout(() => {
                taskElement.classList.remove('completing');
            }, 300);
        }

        this.saveTasks();
        this.render();
    }

    startEdit(id) {
        const task = this.tasks.find(task => task.id === id);
        if (!task) return;

        this.editingTaskId = id;
        this.editTaskInput.value = task.text;
        this.editModal.classList.add('show');
        this.editTaskInput.focus();
        this.editTaskInput.select();
    }

    saveEdit() {
        const text = this.editTaskInput.value.trim();
        if (!text) return;

        const taskIndex = this.tasks.findIndex(task => task.id === this.editingTaskId);
        if (taskIndex === -1) return;

        this.tasks[taskIndex].text = text;
        this.cancelEdit();
        this.saveTasks();
        this.render();
    }

    cancelEdit() {
        this.editingTaskId = null;
        this.editTaskInput.value = '';
        this.editModal.classList.remove('show');
    }

    clearCompleted() {
        this.tasks = this.tasks.filter(task => !task.completed);
        this.saveTasks();
        this.render();
    }

    clearAll() {
        if (confirm('Are you sure you want to delete all tasks?')) {
            this.tasks = [];
            this.saveTasks();
            this.render();
        }
    }

    // Filter Methods
    setFilter(filter) {
        this.currentFilter = filter;
        this.filterBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === filter);
        });
        this.render();
    }

    getFilteredTasks() {
        switch (this.currentFilter) {
            case 'active':
                return this.tasks.filter(task => !task.completed);
            case 'completed':
                return this.tasks.filter(task => task.completed);
            default:
                return this.tasks;
        }
    }

    // Utility Methods
    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    updateStats() {
        const active = this.tasks.filter(task => !task.completed).length;
        const completed = this.tasks.filter(task => task.completed).length;
        const total = this.tasks.length;

        this.activeCount.textContent = active;
        this.completedCount.textContent = completed;
        this.totalCount.textContent = total;
        this.completedCountBtn.textContent = completed;

        // Show/hide action buttons
        this.actionButtons.style.display = total > 0 ? 'flex' : 'none';
        this.clearCompletedBtn.style.display = completed > 0 ? 'inline-block' : 'none';
    }

    updateEmptyState() {
        const filteredTasks = this.getFilteredTasks();
        const isEmpty = filteredTasks.length === 0;

        this.emptyState.style.display = isEmpty ? 'block' : 'none';
        this.tasksList.style.display = isEmpty ? 'none' : 'block';

        // Update empty message based on filter
        let message = 'No tasks yet. Add one above!';
        if (this.currentFilter === 'active' && this.tasks.some(task => task.completed)) {
            message = 'No active tasks. Great job!';
        } else if (this.currentFilter === 'completed' && this.tasks.some(task => !task.completed)) {
            message = 'No completed tasks yet.';
        }
        this.emptyMessage.textContent = message;
    }

    // Render Methods
    createTaskElement(task) {
        const taskDiv = document.createElement('div');
        taskDiv.className = `task-item${task.completed ? ' completed' : ''}`;
        taskDiv.dataset.taskId = task.id;

        taskDiv.innerHTML = `
            <div class="task-checkbox${task.completed ? ' checked' : ''}" onclick="app.toggleComplete(${task.id})">
                ${task.completed ? '<i class="fas fa-check"></i>' : ''}
            </div>
            <div class="task-content">
                <div class="task-text${task.completed ? ' completed' : ''}">${this.escapeHtml(task.text)}</div>
                <div class="task-meta">
                    Created: ${this.formatDate(task.createdAt)}
                    ${task.completedAt ? ` • Completed: ${this.formatDate(task.completedAt)}` : ''}
                </div>
            </div>
            <div class="task-actions">
                <button class="task-btn edit-btn" onclick="app.startEdit(${task.id})" title="Edit task">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="task-btn delete-btn" onclick="app.deleteTask(${task.id})" title="Delete task">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;

        return taskDiv;
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    render() {
        const filteredTasks = this.getFilteredTasks();
        
        // Clear task list
        this.tasksList.innerHTML = '';
        
        // Render tasks
        filteredTasks.forEach(task => {
            this.tasksList.appendChild(this.createTaskElement(task));
        });

        this.updateStats();
        this.updateEmptyState();
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new TodoApp();
});

// Handle page unload to ensure data is saved
window.addEventListener('beforeunload', () => {
    if (window.app) {
        window.app.saveTasks();
    }
});