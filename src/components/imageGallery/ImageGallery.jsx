import ImageCard from '../imageCard/ImageCard';

export default function ImageGallery({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <ImageCard image={item} />
        </li>
      ))}
    </ul>
  );
}
