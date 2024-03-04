import Image from "next/image";
import Right from "../icons/Right";

export default function Hero() {
    return (
        <section className="hero">
            <div className="py-12">
                <h1 className="text-4xl font-semibold">
                    Everything is better with &nbsp;
                    <span className="text-primary">
                        Food
                    </span>
                </h1>
                <p className="my-6 text-primary-500">
                    Food is the missing piece that make every dat complete, a simple yet delicious joy in life
                </p>

                <div className="flex gap-4 text-sm">
                    <button className="bg-primary text-white uppercase items-center flex gap-2 px-8 py-2 rounded-full">
                        Order now
                        <Right />
                    </button>
                    <button className="flex gap-2 py-2 text-primary-500 font-semibold">
                        Learn more
                        <Right />
                    </button>
                </div>
            </div>
            <div className="relative">
                <Image src={'/pizza.png'} layout={'fill'} objectFit={'contain'} alt={'food'}/>
            </div>
        </section>
    );
}