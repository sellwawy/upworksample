/* This example requires Tailwind CSS v2.0+ */

export function ButtonXSmall(props) {
    return (
        <>
          <button
            type="button"
            onClick={props.onClick}
            disabled={props.disabled}
            className={props.disabled? 
              "inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-gray-400 bg-gray-300 cursor-not-allowed"
              :
              "inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700" // focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            }
          >
            <div className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" >
                {props.children}
            </div>
            {props.text}
          </button>
        </>
    )
}