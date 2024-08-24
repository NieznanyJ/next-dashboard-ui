import Image from 'next/image'
import FormModal from '@/components/form/FormModal'
import { FormType, RowType } from '@/types/enums';

function TableSearch({table} : {table: RowType}){
    return (
        <div className="w-full md:w-auto flex flex-col md:flex-row items-center gap-4">
                    <div className="group flex w-full md:w-max  items-center gap-2 border-2 p-1 px-2 rounded-full transition-colors hover:border-gray-500 focus-within:border-gray-500">
                        <Image
                            src="/search.png"
                            alt="search"
                            width={14}
                            height={14}
                        />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="outline-none border-none bg-transparent peer cursor-pointer"
                        />
                    </div>
                <div className="flex items-center justify-end gap-4 w-full">
                <div className="flex items-center justify-center p-2  bg-yellow-400 rounded-full cursor-pointer">
                    <Image src='/filter.png' alt="filter" width={16} height={16}/>
                    </div>
                    <div className="flex items-center justify-center p-2  bg-yellow-400 rounded-full cursor-pointer">
                    <Image src='/sort.png' alt="sort" width={16} height={16}/>
                    </div>
                    <FormModal type={FormType.CREATE} table={table}   />
                </div>
                </div>
    );
}

export default TableSearch;