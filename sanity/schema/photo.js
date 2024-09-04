/* eslint-disable import/no-anonymous-default-export */
export default {
  name: "photo",
  title: "Фото",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Назва",
      type: "string",
      description: "Короткий опис фото, використовується для зручності",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Зображення",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};
