import { useState, useEffect } from "react";
import { toast } from 'react-toastify';

const Content = () => {

    const [users, setUsers] = useState([])  
    const [name, setName] = useState("")  
    const [showForm, setShowForm] = useState(false)  
    const [loading, setLoading] = useState(false)

    // Fetch all users
    const fetchUsers = async() => {
        setLoading(true)
        const url = import.meta.env.VITE_BACKEND_URL+"/api/users"
        try {
            const response = await fetch(url)
            if(response.ok){
                const data=await response.json();
                toast.success("Users fetched successfully!");
                setUsers(data.users)
                setLoading(false)
            }   
        } catch (error) {
            toast.error(error);
        }
    }

    useEffect(()=>{
        fetchUsers();
    },[])
    
    // Create a new user
    const handleSubmit = async(e) => {
        e.preventDefault()
        setLoading(true);
        try {
            const url = import.meta.env.VITE_BACKEND_URL+"/api/users"
            console.log(url)
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({name})
            })
            if(response.ok){
                const data = await response.json();
                toast.success("User created successfully");
                const updatedUsers = [...users, data.user]
                const sortedUsers = updatedUsers.sort((a,b) => b.totalPoints - a.totalPoints)
                setUsers(sortedUsers)
                handlebuttonClick()
                setLoading(false)
            }
        } catch (error) {
            toast.error(error);
        }
    }

    const handlebuttonClick = () => {
        setShowForm(!showForm)
    }

    // handle claim request
    const handleClaimRequest = async(id) => {
        const url = import.meta.env.VITE_BACKEND_URL+"/api/user/"+id+"/claim"
        setLoading(true)
        try {   
            const response = await fetch(url,{
                method: "POST"
            })
            if(response.ok){
                const data = await response.json();
                toast.success(`Claimed ${data.historyPoints.pointsAwarded} points for ${data.user.name}!`);
                fetchUsers();
                setLoading(false)
            }
        } catch (error) {
            toast.error(error);
        }
    }

    const top3 = users.slice(0,3)
    console.log(top3)
    // const restHalfUsers = users.slice(3,users.length)
    const rest = users.slice(3);
    const mid = Math.ceil(rest.length / 2);
    const restHalfUsers = rest.slice(0, mid);
    const remaining = rest.slice(mid);


    return (
        <div className="w-full min-h-screen bg-yellow-100 font-sans relative mt-0">

            {/* Timer and Add User Button in one line */}
            <div className="relative flex items-center justify-between sm:justify-center py-8">
                <div className="text-sm text-gray-700 font-medium text-center px-3">
                    Settlement time: <span className="font-bold">14 days 01:45:47</span>
                </div>
                <div className="absolute right-4 right-4">
                    <button
                    onClick={handlebuttonClick}
                    className="border text-[12px] px-3 py-1 h-7 sm:text-sm sm:px-4 sm:py-2 sm:h-10 rounded-md border-yellow-500 hover:bg-yellow-600 hover:text-white text-yellow-800"
                    >
                    {showForm ? "Cancel" : "New User"}
                    </button>
                </div>
            </div>
            {/* Add User Form */}
            { showForm && 
                <>
                {/* Overlay */}
                <div className="fixed inset-0 backdrop-blur-sm z-40"></div>
                <form onSubmit={handleSubmit} className="bg-white p-4 rounded-xl shadow-md w-[80vw] sm:w-full max-w-md mx-auto mb-8 fixed z-50 top-[30vh] left-[10vw] sm:left-[70vh]">
                    <button onClick={handlebuttonClick} className="ml-[75%] sm:ml-[85%] border p-2 text-red-500 hover:bg-red-500 hover:text-white rounded-md">Cancel</button>
                    <h2 className="text-lg font-semibold mb-4">Add New User</h2>
                    <div className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Enter user name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="border px-4 py-2 rounded"
                        />
                        <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded">
                            Add User
                        </button>
                    </div>
                </form>  
                </>  
            }

            {/* Center Icon */}
            <div className="flex justify-center mt-4">
                <img src="/main_icon.png" alt="Main Icon" className="w-[150px] h-[150px]" />
            </div>
            {/* Top 3 Cards */}
            <div className="flex justify-center items-end gap-4 mt-6 mx-2">
                {/* Rank 2 */}
                <div className="relative bg-white w-[240px] h-[240px] flex flex-col gap-2 justify-center items-center rounded-lg border border-yellow-200 shadow-md">
                    <span className="absolute top-2 left-2 bg-gray-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow">#2</span>
                    <img 
                    className="w-[100px] h-[100px] rounded-full"
                    src={`https://api.dicebear.com/8.x/initials/svg?seed=${top3[1]?.name}`} 
                    alt="user" 
                    />
                    <h2>🇮🇳 {top3[1]?.name || "rahul"}</h2>
                    <div>
                    <b>{top3[1]?.totalPoints}</b>
                    </div>
                    <button 
                        onClick={() => handleClaimRequest(top3[1]?._id)} 
                        className="w-15 h-[30px] sm:w-auto text-xs sm:text-sm p-1 sm:p-2 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-red-500 rounded-md flex justify-center items-center">
                        Claim
                    </button>
                </div>

                {/* Rank 1 */}
                <div className="relative bg-white w-[250px] h-[260px] flex flex-col gap-2 justify-center items-center rounded-lg border border-yellow-200 shadow-md scale-110">
                    <span className="absolute top-2 left-2 bg-yellow-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow">#1</span>
                    <img 
                    className="w-[100px] h-[100px] rounded-full"
                    src={`https://api.dicebear.com/8.x/initials/svg?seed=${top3[0]?.name}`} 
                    alt="user" 
                    />
                    <h2>🇮🇳 {top3[0]?.name || "Kamal"}</h2>
                    <div>
                    <b>{top3[0]?.totalPoints}</b>
                    </div>
                    <button 
                        onClick={() => handleClaimRequest(top3[0]?._id)} 
                        className="w-15 h-[30px] sm:w-auto text-xs sm:text-sm p-1 sm:p-2 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-red-500 rounded-md flex justify-center items-center">
                        Claim
                    </button>
                </div>

                {/* Rank 3 */}
                <div className="relative bg-white w-[240px] h-[240px] flex flex-col gap-2 justify-center items-center rounded-lg border border-yellow-200 shadow-md flex justify-center items-center">
                    <span className="absolute top-2 left-2 bg-orange-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow">#3</span>
                    <img 
                    className="w-[100px] h-[100px] rounded-full"
                    src={`https://api.dicebear.com/8.x/initials/svg?seed=${top3[2]?.name}`} 
                    alt="user" 
                    />
                    <h2>🇮🇳 {top3[2]?.name || "sanak"}</h2>
                    <div>
                    <b>{top3[2]?.totalPoints}</b>
                    </div>
                    <button 
                        onClick={() => handleClaimRequest(top3[2]?._id)} 
                        className="w-15 h-[30px] sm:w-auto text-xs sm:text-sm p-1 sm:p-2 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-red-500 rounded-md flex justify-center items-center">
                        Claim
                    </button>
                </div>
            </div>

            {/* Leaderboard List */}
            <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-xl mx-auto my-6 p-6 w-[85%] gap-8 shadow-md">
                {/* Left List */}
                <ol className="space-y-4">
                    {restHalfUsers.map((user, index) => (
                        <li key={user._id} className="flex items-center gap-2 sm:gap-4 text-sm border-b border-gray-200 pb-2">
                            <span className="text-xs sm:text-sm font-semibold text-gray-500 w-2 sm:w-6">#{index + 4}</span>
                            <img 
                                src={`https://api.dicebear.com/8.x/initials/svg?seed=${user?.name}`}  
                                alt={user.name} 
                                className="w-5 h-5 sm:w-10 sm:h-10 rounded-full" 
                            />
                            <div className="flex justify-between items-center w-90">
                                <div className="flex gap-0.5 w-[84%] text-xs sm:w-auto sm:gap-2 sm:text-sm">
                                    <span>🇮🇳 {user.name}</span>
                                    <span>-</span>
                                    <span className="text-yellow-600 font-semibold">{user.totalPoints} points</span>
                                </div>
                                <button 
                                    onClick={()=>handleClaimRequest(user._id)} 
                                    className="w-[20%] h-[30px] sm:w-auto text-xs sm:text-sm p-1 sm:p-2 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-red-500 rounded-md flex justify-center items-center">
                                    Claim
                                </button>
                            </div>
                        </li>
                    ))}
                </ol>

                {/* Right List */}
                <ol className="space-y-4">
                    {remaining.map((user, index) => (
                        <li key={user._id} className="flex items-center gap-2 sm:gap-4 text-sm border-b border-gray-200 pb-2">
                            <span className="text-xs sm:text-sm font-semibold text-gray-500 w-2 sm:w-6">#{index + 4 + restHalfUsers.length}</span>
                            <img 
                                src={`https://api.dicebear.com/8.x/initials/svg?seed=${user?.name}`}     
                                alt={user.name} 
                                className="w-5 h-5 sm:w-10 sm:h-10 rounded-full" 
                            />
                            <div className="flex justify-between items-center w-90">
                                <div className="flex gap-0.5 w-[84%] text-xs sm:w-auto sm:gap-2 sm:text-sm">
                                    <span>🇮🇳 {user.name}</span>
                                    <span>-</span>
                                    <span className="text-yellow-600 font-semibold">{user.totalPoints} points</span>
                                </div>
                                <button 
                                    onClick={()=>handleClaimRequest(user._id)} 
                                    className="w-[20%] h-[30px] sm:w-auto text-xs sm:text-sm p-1 sm:p-2 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-red-500 rounded-md flex justify-center items-center">
                                    Claim
                                </button>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
            {loading && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-center items-center">
                    <div className="text-white text-lg font-bold animate-pulse">Processing...</div>
                </div>
            )}
        </div>
    );
};

export default Content;
