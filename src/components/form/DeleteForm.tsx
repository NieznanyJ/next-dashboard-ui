import { RowType } from "@/types/enums";


function DeleteForm({ table }: { table: RowType }) {
    return (
        <form className="p-4 flex flex-col items-center gap-4 mt-6 ">
            <span className="text-center font-medium">All data will be lost. Are you sure you want to delete this {table}?</span>

            <button className=" bg-red-700 text-white px-4 py-2 rounded-md border-none">Delete</button>

        </form>
    );
}

export default DeleteForm