import ImageCard from '../imageCard/ImageCard';
import css from './ImageGallery.module.css';

export default function ImageGallery({ items }) {
  return (
    <ul className={css.galleryList}>
      {items.map(item => (
        <li className={css.galerryItem} key={item.id}>
          <ImageCard image={item} />
        </li>
      ))}
    </ul>
  );
}
