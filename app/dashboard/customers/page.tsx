import { fetchCustomers, fetchTableCustomers } from "@/app/lib/data";

import CustomersTable from '@/app/ui/customers/table'

const Page = async () => {
    const customers = await fetchTableCustomers();

    return (
    <CustomersTable customers={customers} />
    )
}

export default Page