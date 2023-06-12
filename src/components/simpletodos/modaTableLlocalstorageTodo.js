import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";

const Todo = () => {
    const formRef = useRef()
    const defaultParams = { id: '', name: '', email: '', message: '' };
    const [params, setParams] = useState(defaultParams)
    const [list, setList] = useState([])
    const [number, setNumber] = useState(0);
    const [modal1, setModal1] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showModalData, setShowModalData] = useState()

    const getFormattedDate = (d) => {
        const dateObj = new Date(d);
        const day = dateObj.getDate();
        const monthNames = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ];
        const month = monthNames[dateObj.getMonth()];
        const year = dateObj.getFullYear();
        return `${day} ${month} ${year}`;
    }
    const formSubmit = (values) => {
        // console.log(values);
        if (params.id) {
            const newData = list.map((items) => {
                if (items.id === params.id) {
                    return { ...items, id: values.id, name: values.name, email: values.email, message: values.message, address: values.address, startdate: values.startdate, enddate: values.enddate, designation: values.designation }
                }
                return items;
            })
            setList(newData)
            formRef.current.resetForm();
            localStorage.setItem(`formData`, JSON.stringify(newData));
        } else {
            const newData = list;
            newData.push({ id: number + 1, name: values.name, email: values.email, message: values.message, address: values.address, startdate: values.startdate, enddate: values.enddate, designation: values.designation })
            setList(newData)
            setNumber(number + 1)
            formRef.current.resetForm();
            localStorage.setItem(`formData`, JSON.stringify(newData));
            localStorage.setItem(`number`, JSON.stringify(number));
        }
        setModal1(false)
    }
    useEffect(() => {
        const storedFormData = localStorage.getItem('formData');
        if (storedFormData === null) {
            localStorage.setItem('formData', JSON.stringify([]))
        } else {
            setList(JSON.parse(localStorage.getItem('formData')))
            setNumber(JSON.parse(localStorage.getItem('number')))
            // console.log(JSON.parse(localStorage.getItem('formData')));
        }
    }, []);

    const editData = (item) => {
        setModal1(true)
        setParams({ ...params, id: item.id, name: item.name, email: item.email, message: item.message, address: item.address, startdate: item.startdate, enddate: item.enddate, designation: item.designation })
    }
    const showData = (data) => {
        setShowModalData(data)
        setShowModal(true)
    }
    return (
        <div>
            <button type='button' className='p-2 bg-green-700 border rounded-md' onClick={() => { setParams(defaultParams); setModal1(true) }}>Add Data</button>
            <Transition appear show={showModal} as={Fragment}>
                <Dialog
                    as="div"
                    open={showModal}
                    onClose={() => setShowModal(false)}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0" />
                    </Transition.Child>
                    <div className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
                        <div className="flex items-start justify-center min-h-screen px-4">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel
                                    as="div"
                                    className="panel border-0 p-0 rounded-lg overflow-hidden my-8 w-full max-w-lg text-black dark:text-white-dark"
                                >
                                    <div className="flex flex-col bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-2">
                                        <div className="text-lg font-bold">
                                            Customer Data
                                        </div>
                                        <div>
                                            <ul>
                                                <li>{showModalData?.id}</li>
                                                <li>{showModalData?.name}</li>
                                                <li>{showModalData?.email}</li>
                                                <li>{showModalData?.message}</li>
                                                <li>{showModalData?.address}</li>
                                                <li>{showModalData?.designation}</li>
                                                <li>{showModalData?.startdate}</li>
                                                <li>{showModalData?.enddate}</li>
                                            </ul>
                                        </div>


                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
            <Transition appear show={modal1} as={Fragment}>
                <Dialog
                    as="div"
                    open={modal1}
                    onClose={() => setModal1(false)}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0" />
                    </Transition.Child>
                    <div className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
                        <div className="flex items-start justify-center min-h-screen px-4">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel
                                    as="div"
                                    className="panel border-0 p-0 rounded-lg overflow-hidden my-8 w-full max-w-lg text-black dark:text-white-dark"
                                >
                                    <div className="flex flex-col bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-2">
                                        <div className="text-lg font-bold">
                                            add Data
                                        </div>
                                        <Formik enableReinitialize innerRef={formRef} initialValues={params} onSubmit={formSubmit}>
                                            {({ isSubmitting, values }) => (
                                                <Form className='flex flex-col'>
                                                    <label htmlFor="name">Name:</label>
                                                    <Field type="text" name="name" id="name" className='border-slate-700 bg-slate-500' />
                                                    <ErrorMessage name="name" />

                                                    <label htmlFor="email">Email:</label>
                                                    <Field type="email" name="email" id="email" className='border-slate-700 bg-slate-500' />
                                                    <ErrorMessage name="email" />

                                                    <label htmlFor="message">Message:</label>
                                                    <Field as="textarea" name="message" id="message" className='border-slate-700 bg-slate-500' />
                                                    <ErrorMessage name="message" />

                                                    <label htmlFor="message">Address:</label>
                                                    <Field as="textarea" name="address" id="Address" className='border-slate-700 bg-slate-500' />
                                                    <ErrorMessage name="Address" />

                                                    <label htmlFor="startdate">StartDate:</label>
                                                    <Field type="date" name="startdate" id="startdate" className='border-slate-700 bg-slate-500' />
                                                    <ErrorMessage name="startdate" />

                                                    <label htmlFor="enddate">EndDate:</label>
                                                    <Field type="date" name="enddate" id="enddate" className='border-slate-700 bg-slate-500' />
                                                    <ErrorMessage name="enddate" />

                                                    <label htmlFor="designation">Designation:</label>
                                                    <Field as='select' name="designation" id="designation" className='border-slate-700 bg-slate-500'>
                                                        <option>php</option>
                                                        <option>react</option>
                                                        <option>python</option>
                                                        <option>laravel</option>
                                                    </Field>
                                                    <ErrorMessage name="designation" />

                                                    <div className="flex justify-end items-center gap-2 mt-8">
                                                        <button
                                                            type="button"
                                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3"
                                                            onClick={() => setModal1(false)}
                                                        >
                                                            Discard
                                                        </button>
                                                        <button
                                                            type="submit"
                                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3"
                                                        >
                                                            {params.id ? 'Edit' : 'Add'}
                                                        </button>
                                                    </div>
                                                </Form>
                                            )}
                                        </Formik>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
            <div className="main-table w-full overflow-x-auto">
                <table className="w-full table-auto">
                    <thead className="bg-blue-500">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>message</th>
                            <th>Address</th>
                            <th>StartDate</th>
                            <th>EndDate</th>
                            <th>Designation</th>
                            <th>Update/Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((data) => {
                            return (
                                <tr key={data.id} className="bg-white">
                                    <td className='bg-cyan-100 mt-3 ml-2' >{data.id} </td>
                                    <td className='bg-cyan-200 mt-3 ml-2' >{data.name} </td>
                                    <td className='bg-cyan-300 mt-3 ml-2'>{data.email}</td>
                                    <td className='bg-cyan-400 mt-3 ml-2'>{data.message}</td>
                                    <td className='bg-cyan-700 mt-3 ml-2'>{data.address}</td>
                                    <td className='bg-cyan-500 mt-3 ml-2'>{getFormattedDate(data.startdate)}</td>
                                    <td className='bg-cyan-600 mt-3 ml-2'>{getFormattedDate(data.enddate)}</td>
                                    <td className='bg-cyan-700 mt-3 ml-2'>{data.designation}</td>
                                    <td className='flex gap-2 ml-2'>
                                        <button className='btn text-black bg-cyan-200 mt-3' onClick={() => showData(data)}>Show</button>
                                        <button className='btn text-black bg-cyan-200 mt-3' onClick={() => editData(data)}>Edit</button>
                                        <button className='btn text-black bg-red-700 mt-3' onClick={() => setList(list.filter((d) => d.id !== data.id))}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div >

    )
}

export default Todo
