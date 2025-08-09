import Tag from "../Tag";

export default function SongDetails() {
  return (
    <div className="flex w-4/12 items-center px-2 py-1 gap-4">
      <figure className="min-w-max max-h-16 h-16 rounded-xl">
        <img
          className="w-full h-full object-cover rounded-lg"
          src="https://catalogo-videoflash.web.app/assets/img/track3.jpg"
          alt="Imagen del track sondando"
        />
      </figure>
      <div className="overflow-hidden">
        <p className="text-lg dark:text-white text-black capitalize overflow-hidden text-ellipsis whitespace-nowrap">
          Nombre
        </p>
        <Tag>Rap</Tag>
      </div>
    </div>
  );
}
