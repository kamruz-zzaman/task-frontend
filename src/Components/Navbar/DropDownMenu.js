/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function DropDownMenu({ title }) {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                {
                    title === "starbucks" ?
                        <Menu.Button className="inline-flex justify-center w-full rounded-md border border-none px-4 py-2 bg-white text-sm font-medium text-gray-700  ">
                            Starbucks
                            <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                        </Menu.Button> :
                        title === "show-more" ?
                            <Menu.Button className="text-gray-500 inline-flex justify-center w-full rounded-md border px-4 py-2 bg-white text-sm font-medium ">
                                10 Items per page
                                <ChevronDownIcon className="-mr-1 ml-10 h-5 w-5" aria-hidden="true" />
                            </Menu.Button> :
                            title === "page" ?
                                <Menu.Button className="text-gray-500 inline-flex justify-center w-full rounded-md border px-4 py-2 bg-white text-sm font-medium ">
                                    Page 1 of 5
                                    <ChevronDownIcon className="-mr-1 ml-10 h-5 w-5" aria-hidden="true" />
                                </Menu.Button>
                                :
                                <Menu.Button className="inline-flex justify-center w-full rounded-md border border-none px-4 py-2 bg-white text-sm font-medium text-gray-700  ">
                                    John Doe
                                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                                </Menu.Button>
                }

            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                {
                    title === "starbucks" ?
                        <Menu.Items className="origin-top-right absolute left-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Link1
                                        </a>
                                    )}
                                </Menu.Item>
                            </div>
                        </Menu.Items> :
                        title === "show-more" ?
                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                item
                                            </a>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items> :
                            title === "page" ?
                                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    page
                                                </a>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                                :
                                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    Profile
                                                </a>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                }
            </Transition>
        </Menu>
    )
}
