import {useRouter} from 'next/router'
import Link from "next/link";

export default function () {
    const {query} = useRouter();

    let districts  = [
        { id: 0, nr:"", title: "", description: ""}, // is default , is required (pentru cei care nu inteleg engleza <<el trebuie>>)
        { id: 1, nr:"MD-AN", title: "anenii noi", description: "Right. Say that again. No, no, George, look, it's just an act, right? Okay, so 9:00 you're strolling through the parking lot, you see us struggling in the car, you walk up, you open the door and you say, your line, George. Stop it. We're gonna take a little break but we'll be back in a while so, don't nobody go no where." },
        { id: 2, nr:"MD-BA" , title: "balti", description: "ceva " },
        { id: 3, nr:"MD-BD" , title: "tichina", description: "ceva " },
        { id: 4, nr:"MD-BR" , title: "Briceni", description: "ceva " },
        { id: 5, nr:"MD-BS" , title: "basarabeasca", description: "ceva " },
        { id: 6, nr:"MD-CA" , title: "cahul", description: "ceva " },
        { id: 7, nr:"MD-CM" , title: "cimislia", description: "ceva " },
        { id: 8, nr:"MD-CR" , title: "criuleni", description: "ceva " },
        { id: 9, nr:"MD-CS" , title: "causeni", description: "ceva " },
        { id: 10, nr:"MD-CT" , title: "cantemir", description: "ceva " },
        { id: 11, nr:"MD-CU" , title: "chisinau", description: "ceva " },
        { id: 12, nr:"MD-DO" , title: "donduseni", description: "ceva " },
        { id: 13, nr:"MD-DR" , title: "drochia", description: "ceva " },
        { id: 14, nr:"MD-DU" , title: "dubasari", description: "ceva " },
        { id: 15, nr:"MD-ED" , title: "edinet", description: "ceva " },
        { id: 16, nr:"MD-FA" , title: "falesti", description: "ceva " },
        { id: 17, nr:"MD-FL" , title: "floresti", description: "ceva " },
        { id: 18, nr:"MD-GA" , title: "gagauzia", description: "ceva " },
        { id: 19, nr:"MD-GL" , title: "glodeni", description: "ceva " },
        { id: 20, nr:"MD-HI" , title: "hincesti", description: "ceva " },
        { id: 21, nr:"MD-IA" , title: "ialoveni", description: "ceva " },
        { id: 22, nr:"MD-LE" , title: "leova", description: "ceva " },
        { id: 23, nr:"MD-NI" , title: "nisporeni", description: "ceva " },
        { id: 24, nr:"MD-OC" , title: "Ocnita", description: "ceva " },
        { id: 25, nr:"MD-OR" , title: "orhei", description: "ceva " },
        { id: 26, nr:"MD-RE" , title: "rezina", description: "ceva " },
        { id: 27, nr:"MD-RI" , title: "riscani", description: "ceva " },
        { id: 28, nr:"MD-SD" , title: "soldanesti", description: "ceva " },
        { id: 29, nr:"MD-SI" , title: "singerei", description: "ceva " },
        { id: 30, nr:"MD-SN" , title: "transnistria", description: "ceva " },
        { id: 31, nr:"MD-SO" , title: "soroca", description: "ceva " },
        { id: 32, nr:"MD-ST" , title: "straseni", description: "ceva " },
        { id: 33, nr:"MD-SV" , title: "stefan voda", description: "ceva " },
        { id: 34, nr:"MD-TA" , title: "taraclia", description: "ceva " },
        { id: 35, nr:"MD-TE" , title: "telenesti", description: "ceva " },
        { id: 36, nr:"MD-UN" , title: "ungheni", description: "ceva " },
    ];
    let id = query.id;
    return(
        <div className={"mt-24 ml-10"}>
            {/*<Link href={`/page/`}>*/}
            {/*    <a>inapoi la page</a>*/}
            {/*</Link>*/}
            {/*<h1>aici sunt afisate datele user cu id : {query.id}</h1>*/}
            {/*<h1>Localitatea- {districts[id].title}</h1>*/}
            {/*<h1>Descrierea- {districts[id].description}</h1>*/}

            {/*font-family: 'Nunito Sans';*/}
            <style jsx>
                {`
           .sub{
            font-family: 'Nunito Sans';
           }
        `}</style>

            <section>
                <div className=" flex flex-col items-center px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex flex-col w-full max-w-5xl mx-auto prose text-left prose-blue">
                        <div className="w-full mx-auto">
                            <b className={"text-5xl"}>Bine ati venit in vizita la <b>{districts[id].title}</b>.</b>
                            <div className={"text-2xl mt-10"}>Localitatea <b>{districts[id].title}</b> .</div>
                            <div className={"mt-4"}>{districts[id].description}</div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
};
