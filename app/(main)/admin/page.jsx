import { getPendingDoctors, getVerifiedDoctors, } from "@/actions/admin";
import { TabsContent } from "@/components/ui/tabs";
import React from "react";

import VerifiedDoctors from "./_components/verified-doctors";
import PendingDoctors from "./_components/pending-doctors";

export default async function AdminPage() {

    const [pendingDoctorsData, verifiedDoctorsData] =
     await Promise.all([
      getPendingDoctors(),
      getVerifiedDoctors(),
     
    ]);


    return (
        <>
            <TabsContent value="pending" className="border-nonw p-0">
                <PendingDoctors doctors={pendingDoctorsData.doctors || []}/>                
            </TabsContent>

            <TabsContent value="doctors" className="border-nonw p-0"> 
                <VerifiedDoctors doctors={verifiedDoctorsData.doctors || []}/>
            </TabsContent>
        </>
    );
}
