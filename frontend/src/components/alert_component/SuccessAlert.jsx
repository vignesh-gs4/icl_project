import useAppContext from "../../hooks/useAppContext";

export default function SuccessAlert() {
    const { setShowAlert, showAlert } = useAppContext();

    // If there is no alert message, don't render anything
    if (!showAlert) return null;

    return (
        /* 1. Added fixed positioning classes to center it at the top */
        <div className="fixed top-10 left-1/2 -translate-x-1/2 z-[100] 
                        flex items-center justify-between 
                        max-w-80 w-full h-10 
                        bg-white text-blue-600 rounded shadow-lg overflow-hidden
                        transition-all duration-300">
            
            {/* Blue accent bar on the left */}
            <div className="h-full w-1.5 bg-blue-600"></div>

            <div className="flex items-center flex-1 px-3">
                <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {/* 2. Converted style strings to React props */}
                    <path 
                        fill="none" 
                        stroke="currentColor" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="1.95" 
                        d="M11.95 16.5h.1" 
                    />
                    <path 
                        d="M3 12a9 9 0 0 1 9-9h0a9 9 0 0 1 9 9h0a9 9 0 0 1-9 9h0a9 9 0 0 1-9-9m9 0V7" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="1.5" 
                    />
                </svg>
                <p className="text-sm ml-2 font-medium">{showAlert}</p>
            </div>

            <button 
                onClick={() => setShowAlert(false)} 
                type="button" 
                aria-label="close" 
                className="active:scale-90 transition-all px-3 h-full flex items-center hover:bg-gray-100"
            >
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </div>
    );
}