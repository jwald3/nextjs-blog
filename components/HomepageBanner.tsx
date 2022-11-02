function HomepageBanner() {
    return (
        <div className="flex justify-between items-center h-60 bg-green-500 border-y border-black py-10 lg:py-0">
            <div className="px-10 space-y-5">
                <h1 className="text-3xl max-w-xl font-serif md:text-4xl lg:text-6xl">
                    My journey as a software developer
                </h1>
                <h2>
                    My stories about using programming languages to solve
                    problems and delight users.
                </h2>
            </div>
            <div className="hidden md:inline-flex h-32 lg:h-full">
                <img
                    src="https://user-images.githubusercontent.com/59290280/199429403-21b54b7c-a402-46b0-822d-37ffac554ee2.png"
                    className="h-1/3 mx-10 my-auto"
                />
            </div>
        </div>
    );
}

export default HomepageBanner;
