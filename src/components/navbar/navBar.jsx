import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Transition,
  } from '@headlessui/react'
  import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
  
  const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function Navbar() {
    return (
        <Disclosure as="nav" className="bg-secondary-400">
            {({ open }) => (
            <>
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-end">
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <div className='block mr-2 text-primary-800 items-center text-center border-r-2 border-primary-50 border-opacity-75 border-r-primary-50'>
                                <div className='p-4'>
                                    <p className='text-[12px] font-light'>JUAN CARLOS, ALVAREZ</p>
                                    <p className='text-[10px] font-bold'>AG-SAN JERÓNIMO</p>
                                </div>
                            </div>
                            <button
                                type="button"
                                className="relative rounded-full p-1 text-primary-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-800"
                            >
                                <span className="absolute -inset-1.5" />
                                <span className="sr-only">View notifications</span>
                                <BellIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
            
                            {/* Profile dropdown */}
                            <Menu as="div" className="relative ml-3">
                                <div>
                                    <MenuButton className="relative flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary-50 focus:ring-offset-2 focus:ring-offset-primary-800">
                                        <span className="absolute -inset-1.5" />
                                        <span className="sr-only">Open user menu</span>
                                        <img
                                        className="h-8 w-8 rounded-full"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""
                                        />
                                    </MenuButton>
                                </div>
                                <Transition
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                                >
                                    <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <MenuItem>
                                        {({ focus }) => (
                                            <a
                                            href="#"
                                            className={classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                            >
                                            Your Profile
                                            </a>
                                        )}
                                        </MenuItem>
                                        <MenuItem>
                                        {({ focus }) => (
                                            <a
                                            href="#"
                                            className={classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                            >
                                            Settings
                                            </a>
                                        )}
                                        </MenuItem>
                                        <MenuItem>
                                        {({ focus }) => (
                                            <a
                                            href="#"
                                            className={classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                            >
                                            Sign out
                                            </a>
                                        )}
                                        </MenuItem>
                                    </MenuItems>
                                </Transition>
                            </Menu>
                        </div>
                    </div>
                </div>
    
                <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                    <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium',
                        )}
                        aria-current={item.current ? 'page' : undefined}
                    >
                        {item.name}
                    </DisclosureButton>
                    ))}
                </div>
                </DisclosurePanel>
            </>
            )}
        </Disclosure>
    );
}