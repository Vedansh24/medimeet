import React from "react";

const SpecialityPage = async ({ params }) => {
    const { specialty } = await params;

    return <div>SpecialtyPage: {specialty}</div>;
};

    export default SpecialityPage;