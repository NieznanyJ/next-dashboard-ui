import Image from "next/image";

interface SmallInfoCardProps{
    icon: string;
    data: string;
    label: string;
}

function SmallInfoCard({ icon, data, label  }: SmallInfoCardProps) {
   

    return (
        <div className="w-full  bg-white py-6 px-4 rounded-md flex-1 flex items-center  gap-6 ">
            <Image  src={icon} alt={label} width={36} height={36} />

            <div className="flex flex-col gap-2">
                <p className="text-xl font-semibold">{data}</p>
                <span className="capitalize text-sm text-gray-500">{label}</span>
            </div>
        </div>
    );
}

export default SmallInfoCard;
