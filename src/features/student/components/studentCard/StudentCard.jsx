export default function StudentCard({ children }) {
    return (
        <div className="border border-gray-200 rounded-2xl w-[350px] h-fit">
            {children}
        </div>
    );
}

function Banner() {
    return (
        <div className="bg-gray-500 h-[270px] rounded-2xl overflow-hidden">
            <img
                src="https://s4.static.brasilescola.uol.com.br/be/2023/08/dia-do-estudante.jpg"
                alt="student banner"
                className="w-full h-full object-cover"
            />
        </div>
    );
}

function Name() {
    return (
        <h2 className="text-base font-semibold">Name</h2>
    );
}

function Description() {
    return (
        <div>
            <div className="text-xs">
                Description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, expedita.
            </div>
        </div>
    );
}

function ShowMoreButton() {
    return (
        <button className="px-3 py-2 rounded-lg bg-blue-500 text-white text-sm hover:bg-blue-600 transition">
            Show more
        </button>
    );
}

function CompactDescription() {
    return (
        <div className="flex flex-col gap-2">
            <Description />
            <div className="flex justify-end">
                <ShowMoreButton />
            </div>
        </div>
    );
}

// Anexando os subcomponentes ao componente principal
StudentCard.Name = Name;
StudentCard.Banner = Banner;
StudentCard.Description = Description;
StudentCard.ShowMoreButton = ShowMoreButton;
StudentCard.CompactDescription = CompactDescription;
