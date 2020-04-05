import React from "react"
import PostItem from "../PostItem"

const Hit = ({
  hit: {
    fields: { slug },
    description,
    category,
    date,
    title,
    background,
    timeToRead,
  },
}) => (
  <PostItem
    slug={slug}
    title={title}
    date={date}
    description={description}
    category={category}
    background={background}
    timeToRead={timeToRead}
  />
)

export default Hit
