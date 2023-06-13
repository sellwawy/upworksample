import { useEffect, useState } from "react";
import { BeakerIcon } from '@heroicons/react/20/solid'
import { ButtonXSmall } from "./buttons.js";

export default function TestCard() {


  const actionOne = () => {
    console.log('action one')
  }

  const actionTwo = (event) => {
    event.stopPropagation()
    console.log('action two')
  }

  const buttonTwo = <ButtonXSmall text="Button" onClick={actionTwo}>
      <BeakerIcon />
    </ButtonXSmall>

  const widthStyle = {width: String(20) + '%'}

  return (
    <div onClick={actionOne} className="block bg-gray-200 hover:bg-gray-100 transition duration-150 ease-in-out sm:hover:scale-105 w-full text-left cursor-pointer">
        <div className="shadow-lg hover:shadow-xl overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md">
            <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                    <img
                    className="inline-block h-16 w-16 rounded-md"
                    src="https://en.wikipedia.org/static/images/icons/wikipedia.png"
                    />
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm font-medium text-gray-900">
                    Sample title
                    </p>
                    <div className="flex">
                        <div className="flex-1">
                            <p className="text-xs sm:text-sm text-gray-600">
                                Sample text
                                <span className="mx-1 hidden sm:inline">|</span>
                                <br className="sm:hidden" />
                                <span>
                                More sample text
                                </span>
                            </p>
                            <p className="text-xs sm:text-sm text-gray-400">Caption</p>
                        </div>
                        <div className="flex-none pt-2">
                            {buttonTwo}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-indigo-200 rounded-full overflow-hidden">
            <div className="h-1 bg-indigo-600 rounded-full" style={widthStyle} />
        </div>
    </div>
  )
  }
