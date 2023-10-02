// schemas/pet.js
export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Alternative text',
              description: `Some of your visitors cannot see images, 
                be they blind, color-blind, low-sighted; 
                alternative text is of great help for those 
                people that can rely on it to have a good idea of 
                what\'s on your page.`,
              options: {
                isHighlighted: true
              }
            }
          ]
        }
      ]
    },
    {
      name: 'metadesc',
      type: 'string',
      title: 'Meta Description',
    },
    {
      title: 'Blog Image',
      name: 'blogimage',
      type: 'image',
      options: {
        hotspot: true // <-- Defaults to false
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        }
      ]
    },
    {
      title: 'Created At',
      name: 'createdAt',
      type: 'datetime',
    
    },
    {
      name: 'author',
      type: 'object',
      fields: [
        {
          title: 'Author',
          name: 'author',
          type: 'reference',
          to: [{type: 'author'}]
        }
      ]
    },
    
  ],
}
