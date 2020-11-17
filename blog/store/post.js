const posts = [
  {
    title: 'Post 1',
    date: new Date(), 
    views: 22,
    comments: [1, 2],
    _id: 'id1'
  },
  {
    title: 'Post 2',
    date: new Date(), 
    views: 22,
    comments: [1, 2],
    _id: 'id2'
  }
]

export const actions = {
  async fetchAdminPosts({}) {
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve(posts)
      }, 1000)
    })
  },
  async remove({}, id) {
    console.log('deleted')
  },
  async create({}, {title, text}) {
    console.log('created')
  },
  async update({}, {id, text}) {
    console.log('updated')
  },
  async fetchAdminById({}, id) {
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve(posts.find(p => p._id === id))
      }, 1000)
    })
  }
}