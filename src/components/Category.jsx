import FlowingMenu from "../components/FlowingMenu";
import img1 from "../assets/image1.png"; // pastikan path benar
import img2 from "../assets/image1.png"; // pastikan path benar
import img3 from "../assets/image1.png"; // pastikan path benar
import img4 from "../assets/image1.png"; // pastikan path benar

export default function App() {
    const menuItems = [
        { link: "#lomba1", text: "CLOTHES", image: img1 },
        { link: "#lomba1", text: "SHOES", image: img2 },
        { link: "#lomba1", text: "BAGS", image: img3 },
        { link: "#lomba1", text: "ACCESSORIES", image: img4 },
        // bisa tambahkan lagi kalau mau
    ];

    return (
        <>
            <div className="bg-beig px-6 py-10">
                <div className=" md:flex items-center justify-between">
                    <h2 className="text-[40px] tracking-tight text-center md:text-6xl font-helvetica font-bold ">
                        CATEGORIES
                    </h2>
                </div>
            </div>
            <div className="h-[400px] md:h-[500px] bg-beig text-dark relative tracking-[-2px] ">
                <FlowingMenu items={menuItems} />
            </div>

        </>
    );
}
