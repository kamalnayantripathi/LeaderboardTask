const Header = () => {
    return (
        <header className="bg-yellow-100 border-b border-yellow-300 shadow-sm py-4 px-4 sm:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <ul className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm text-yellow-700 font-semibold">
                    <li className="hover:text-yellow-900 cursor-pointer">Ranking</li>
                    <li className="hover:text-yellow-900 cursor-pointer">Hourly Ranking</li>
                    <li className="hover:text-yellow-900 cursor-pointer">Family Ranking</li>
                    <li className="hover:text-yellow-900 cursor-pointer">Wealth Ranking</li>
                </ul>
                <ul className="text-sm text-yellow-700 font-semibold">
                    <li className="hover:text-yellow-900 cursor-pointer">Help</li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
