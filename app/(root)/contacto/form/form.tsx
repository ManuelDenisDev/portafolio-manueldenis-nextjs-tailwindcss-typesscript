'use client'

import Button from '@/components/iu/Button'

const Form = () => {
    return (
        <form className="max-w-2xl mx-auto space-y-4">
            <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                <input
                    type="text"
                    placeholder="Nombre"
                    className="w-full bg-principalDark/10 outline-none py-3 px-4 rounded"
                />
                <input
                    type="text"
                    placeholder="Apellidos"
                    className="w-full bg-principalDark/10 outline-none py-3 px-4 rounded"
                />
            </div>
            <div className="space-y-4">
                <textarea
                    rows={5}
                    placeholder="Mensaje"
                    className="w-full bg-principalDark/10 outline-none py-3 px-4 rounded resize-none"
                />
                <Button type="submit" label="Envier mensaje" onClick={() => {}} />
            </div>
        </form>
    )
}

export default Form
