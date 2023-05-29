import React from "react";
import styled from "styled-components/macro";

const PhotoGridItem = ({ id, src, alt, tags }) => {
  const sources = [
    { type: "image/avif", ext: "avif", sizes: ["", "2x", "3x"] },
    { type: "image/jpeg", ext: "jpg", sizes: ["", "2x", "3x"] },
  ];

  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <picture>
          {sources.map(({ type, ext, sizes }) => (
            <source
              type={type}
              srcSet={sizes.map((size) =>
                src.replace(
                  /\.\w+$/,
                  `${size ? "@" + size : ""}.${ext} ${size}`
                )
              )}
            />
          ))}
          <Image src={src} alt={alt} />
        </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
  object-fit: cover;
`;

const Tags = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  white-space: nowrap;
  gap: 8px;
`;

const Tag = styled.li`
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);

  &:last-of-type {
    flex-shrink: 100;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export default PhotoGridItem;
