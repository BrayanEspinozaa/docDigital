import { AiOutlineFileSync } from "react-icons/ai"
import { FcCalculator, FcDocument, FcMoneyTransfer, FcRefresh } from "react-icons/fc"
import { GrDocumentDownload } from "react-icons/gr"
import { LuFileSignature } from "react-icons/lu"

export const packages = [
    {
        id: 1,
        title: 'Emprendedor',
        price: '1,000',
        movements: '1 - 30'
    },
    {
        id: 2,
        title: 'Emprendedor Plus',
        price: '2,000',
        movements: '31 - 100'
    },
    {
        id: 3,
        title: 'Empresarial',
        price: '3,000',
        movements: '101 - 300'
    },
    {
        id: 4,
        title: 'Emprendedor',
        movements: '+ 300'
    },
]

export const offers = [
    {
        id: 1,
        description: 'Hacemos tu contabilidad',
        Icon: FcCalculator
    },
    {
        id: 2,
        description: 'Calculamos tus impuestos',
        Icon: FcRefresh
    },
    {
        id: 3,
        description: 'Presentamos tus declaraciones al SAT',
        Icon: FcDocument
    },
    {
        id: 4,
        description: 'Calculo, timbrado y envio de nomina',
        Icon: FcMoneyTransfer
    },
]

export const benefits = [
    {
        id: 1,
        title: 'Automatico',
        description: 'Ahorra tiempo al eliminar la tarea de enviar facturas a tu contador !El proceso es automatico!'
    },
    {
        id: 2,
        title: 'Servicio Oportuno',
        description: 'Comunicacion mas facil y efectiva con tu contador'
    },
    {
        id: 3,
        title: 'Simplicidad',
        description: 'Informacion contable en tiempo real'
    },
    {
        id: 4,
        title: 'Confiable',
        description: 'Calculos hechos por uno de nuestros contadores expertos asignado especialmente a tu negocio'
    },
]

export const steps = [
    {
        id: 1,
        description: 'Agrega tu FIEL',
        Icon: LuFileSignature
    },
    {
        id: 2,
        description: 'Sincroniza tus cuentas bancarias',
        Icon: AiOutlineFileSync
    },
    {
        id: 3,
        description: 'Recibe mensualmente tu declaracion de impuestos',
        Icon: GrDocumentDownload
    },
]