export default function ImageCard({ image: { urls, description } }) {
  return (
    <div>
      <img src={urls.small} alt={description} />
    </div>
  );
}
