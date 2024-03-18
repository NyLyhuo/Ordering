export default function MenuItem() {
    return (
        <>
            <div className="bg-gray-200 p-4 rounded-lg text-center
            hover:bg-white hover:shadow-md hover:shadow-black/15 transition-all">
                <div className="text-center">
                    <img src="/pizza.png" className="max-h-auto max-h-24 block mx-auto" alt="pizza"/>
                </div>
                
                <h4 className="font-semibold text-xl my-3">Pepperoni Pizza</h4>
                <p className="text-gray-500 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                </p>
                <button className="bg-primary text-white rounded-full px-4 py-2 mt-4">Add to cart $12</button>
            </div>
        </>
    );
}