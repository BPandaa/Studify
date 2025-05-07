const post = {
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
      { name: 'title', title: 'Title', type: 'string' },
      { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
      { name: 'excerpt', title: 'Excerpt', type: 'text' },
      {
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [{ type: 'block' }],
      },
      { name: 'image', title: 'Cover Image', type: 'image', options: { hotspot: true } },
      { name: 'category', title: 'Category', type: 'string' },
      { name: 'date', title: 'Date', type: 'datetime' },
      { name: 'isPremium', title: 'Is Premium?', type: 'boolean' }
    ]
  }
  
  export default post
  