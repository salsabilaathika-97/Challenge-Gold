import React from "react";
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

const Accordion = () => {
    return (
        <>
            <div className="w-full px-4 pt-16">
            <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
                <Disclosure>
                {({ open }) => (
                    <>
                    <Disclosure.Button className="flex justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-bold text-black border border-gray-600 w-[668px] h-14">
                        <span>Apa saja syarat yang dibutuhkan?</span>
                        <ChevronUpIcon
                        className={`${
                            open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black`}
                        />
                    </Disclosure.Button>
                    </>
                )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                {({ open }) => (
                    <>
                    <Disclosure.Button className="flex justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-bold text-black border border-gray-600 w-[668px] h-14">
                        <span>Berapa hari minimal sewa mobil lepas kunci?</span>
                        <ChevronUpIcon
                        className={`${
                            open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black`}
                        />
                    </Disclosure.Button>
                    </>
                )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                {({ open }) => (
                    <>
                    <Disclosure.Button className="flex justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-bold text-black border border-gray-600 w-[668px] h-14">
                        <span>Berapa hari sebelumnya sebaiknya booking sewa mobil?</span>
                        <ChevronUpIcon
                        className={`${
                            open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black`}
                        />
                    </Disclosure.Button>
                    </>
                )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                {({ open }) => (
                    <>
                    <Disclosure.Button className="flex justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-bold text-black border border-gray-600 w-[668px] h-14">
                        <span>Apakah ada biaya antar jemput?</span>
                        <ChevronUpIcon
                        className={`${
                            open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black`}
                        />
                    </Disclosure.Button>
                    </>
                )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                {({ open }) => (
                    <>
                    <Disclosure.Button className="flex justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-bold text-black border border-gray-600 w-[668px] h-14">
                        <span>Bagaimana jika terjadi kecelakaan?</span>
                        <ChevronUpIcon
                        className={`${
                            open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black`}
                        />
                    </Disclosure.Button>
                    </>
                )}
                </Disclosure>
            </div>
        </div>
        </>
    );
};

export default Accordion;
