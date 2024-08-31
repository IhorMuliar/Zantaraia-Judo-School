/* eslint-disable import/no-anonymous-default-export */
export default {
  name: "blogPost",
  title: "Новина",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Заголовок",
      type: "string",
      description: "Назва новини",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "releaseDate",
      title: "Дата",
      type: "date",
      description: "Дата написання новини",
      validation: (Rule) => Rule.required(),
      options: {
        dateFormat: "YYYY-MM-DD",
        calendarTodayLabel: "Today",
      },
    },
    {
      name: "description",
      title: "Короткий опис",
      type: "string",
      description: "Короткий опис новини",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Ідентифікатор",
      type: "slug",
      description: "Генерується для url сторінки, натисніть 'Generate'",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "preview",
      title: "Прев'ю",
      type: "image",
      description: "Зображення, яке буде використовуватися як прев'ю категорії",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};
