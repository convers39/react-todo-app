const initialLists = [
  {
    id: 1,
    name: 'list 1',
    tasks: [
      {
        listId: 1,
        created: '2021-3-1',
        date: '2021-03-10',
        deleted: false,
        finished: true,
        id: 'todo_1614592246649',
        tags: ['js', 'react'],
        task: 'learn mobx'
      },
      {
        listId: 1,
        created: '2021-3-1',
        date: '2021-03-03',
        deleted: false,
        finished: false,
        id: 'todo_1614591103488',
        tags: ['react', 'js'],
        task: 'learn redux'
      },
      {
        listId: 1,
        created: '2021-03-02',
        date: '2021-03-04',
        deleted: false,
        finished: false,
        id: 'todo_1614614664906',
        tags: ['Python'],
        task: 'learn Python'
      }
    ]
  },
  {
    id: 2,
    name: 'list 2',
    tasks: [
      {
        listId: 2,
        created: '2021-3-3',
        date: '2021-03-10',
        deleted: false,
        finished: true,
        id: 'todo_1614592246648',
        tags: ['js', 'node'],
        task: 'learn node.js'
      },
      {
        listId: 2,
        created: '2021-3-3',
        date: '2021-03-13',
        deleted: false,
        finished: false,
        id: 'todo_1614591103468',
        tags: ['django', 'python'],
        task: 'learn Django'
      },
      {
        listId: 2,
        created: '2021-03-03',
        date: '2021-03-04',
        deleted: false,
        finished: false,
        id: 'todo_1614614664916',
        tags: ['Python', 'Flask'],
        task: 'learn Flask'
      }
    ]
  },
  {
    id: 3,
    name: 'list 3',
    tasks: [
      {
        listId: 3,
        created: '2021-3-4',
        date: '2021-03-10',
        deleted: false,
        finished: true,
        id: 'todo_1614592246644',
        tags: ['js', 'vue'],
        task: 'learn vue'
      },
      {
        listId: 3,
        created: '2021-3-4',
        date: '2021-03-03',
        deleted: false,
        finished: false,
        id: 'todo_1614591103478',
        tags: ['react', 'js'],
        task: 'learn Next.js'
      },
      {
        listId: 3,
        created: '2021-03-04',
        date: '2021-03-04',
        deleted: false,
        finished: false,
        id: 'todo_1614614665906',
        tags: ['js', 'express', 'node'],
        task: 'learn express'
      }
    ]
  }
]
const initialTasks = [
  {
    listId: 1,
    created: '2021-3-1',
    date: '2021-03-10',
    deleted: false,
    finished: true,
    id: 'todo_1614592246649',
    tags: ['js', 'react'],
    task: 'learn mobx'
  },
  {
    listId: 1,
    created: '2021-3-1',
    date: '2021-03-03',
    deleted: false,
    finished: false,
    id: 'todo_1614591103488',
    tags: ['react', 'js'],
    task: 'learn redux'
  },
  {
    listId: 1,
    created: '2021-03-02',
    date: '2021-03-04',
    deleted: false,
    finished: false,
    id: 'todo_1614614664906',
    tags: ['Python'],
    task: 'learn Python'
  },
  {
    listId: 2,
    created: '2021-3-3',
    date: '2021-03-10',
    deleted: false,
    finished: true,
    id: 'todo_1614592246648',
    tags: ['js', 'node'],
    task: 'learn node.js'
  },
  {
    listId: 2,
    created: '2021-3-3',
    date: '2021-03-13',
    deleted: false,
    finished: false,
    id: 'todo_1614591103468',
    tags: ['django', 'python'],
    task: 'learn Django'
  },
  {
    listId: 2,
    created: '2021-03-03',
    date: '2021-03-04',
    deleted: false,
    finished: false,
    id: 'todo_1614614664916',
    tags: ['Python', 'Flask'],
    task: 'learn Flask'
  },
  {
    listId: 3,
    created: '2021-3-4',
    date: '2021-03-10',
    deleted: false,
    finished: true,
    id: 'todo_1614592246644',
    tags: ['js', 'vue'],
    task: 'learn vue'
  },
  {
    listId: 3,
    created: '2021-3-4',
    date: '2021-03-03',
    deleted: false,
    finished: false,
    id: 'todo_1614591103478',
    tags: ['react', 'js'],
    task: 'learn Next.js'
  },
  {
    listId: 3,
    created: '2021-03-04',
    date: '2021-03-04',
    deleted: false,
    finished: false,
    id: 'todo_1614614665906',
    tags: ['js', 'express', 'node'],
    task: 'learn express'
  }
]

const initialTags = [
  'js',
  'react',
  'python',
  'django',
  'flask',
  'node',
  'vue',
  'express'
]

// localStorage.setItem('lists', JSON.stringify(initialLists))
// localStorage.setItem('tasks', JSON.stringify(initialTasks))
// localStorage.setItem('tags', JSON.stringify(initialTags))

// initialLists.forEach((list) => {
//   localStorage.setItem(list.id, JSON.stringify(list.tasks))
// })

export const getDataFromLocalStorage = (key) => {
  const data = localStorage.getItem(key)
  if (!data) {
    return []
  }
  return JSON.parse(data)
}

export const updateLocalStorage = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value))
