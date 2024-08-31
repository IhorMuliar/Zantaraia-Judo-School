/* eslint-disable import/no-anonymous-default-export */
export default {
  name: "galleryCategory",
  title: "Категорія галереї",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Заголовок",
      type: "string",
      description: "Назва категорії",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Опис",
      type: "text",
      description: "Короткий опис категорії, використовується як опис прев'ю",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Ідентифікатор",
      type: "slug",
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
    {
      name: "photos",
      title: "Фотографії",
      type: "array",
      of: [{ type: "reference", to: [{ type: "photo" }] }],
      description: "Заповніть список фото",
    },
  ],
};
