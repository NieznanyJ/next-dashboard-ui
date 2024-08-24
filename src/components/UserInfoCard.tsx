import Image from "next/image";
import { Teacher, Student, Parent } from '@/types'

function isParent(info: Teacher | Student | Parent ): info is Parent{
    return (info as Parent).students !== undefined
}

function UserInfoCard({ info }: { info: Teacher | Student | Parent }) {

    return (
        <div className="bg-sky-regular py-6 px-4 rounded-md flex-1 flex flex-col sm:flex-row gap-4 ">
            <div className="w-full sm:w-1/3 flex  justify-center sm:justify-start">
                {!isParent(info) && <Image
                    src={info?.photo as string}
                    alt=""
                    width={144}
                    height={144}
                    className="w-36 h-36 rounded-full object-cover"
                />}
            </div>
            <div className="w-full sm:w-2/3 flex flex-col justify-between item-center gap-4 ">
                <h1 className="font-semibold text-xl">{info?.name}</h1>
                <p className="text-xs text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis voluptatem temporibus quo. Voluptas rem quos,
                    cumque facilis praesentium numquam similique.
                </p>

                <div className="flex flex-col gap-3 text-xs">
                    <div className="flex items-center gap-2">
                        <Image
                            src="/blood.png"
                            alt="blood type"
                            width={14}
                            height={14}
                        />
                        <span>A+</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Image
                            src="/date.png"
                            alt="hire date"
                            width={14}
                            height={14}
                        />
                        <span>January 2024</span>
                    </div>
                    {info?.email && (
                        <div className="flex items-center gap-2">
                            <Image
                                src="/mail.png"
                                alt="email address"
                                width={14}
                                height={14}
                            />
                            <span>{info?.email}</span>
                        </div>
                    )}
                    <div className="flex items-center gap-2">
                        <Image
                            src="/phone.png"
                            alt="phone number"
                            width={14}
                            height={14}
                        />
                        <span>{info?.phone}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserInfoCard;
