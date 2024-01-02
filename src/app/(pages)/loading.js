import Image from "next/image";
import LoadingGif from "../../assets/img/loading.gif";
export default function Loading() {
  // Or a custom loading skeleton component
  return (
    //<div className="mx-auto items-center text-center flex flex-col">
    <div className="flex items-center justify-center h-scree bg-white">
      <Image
        src={LoadingGif}
        className="loader-image"
        width={200}
        alt="Loading.."
      />
    </div>
  );
}
