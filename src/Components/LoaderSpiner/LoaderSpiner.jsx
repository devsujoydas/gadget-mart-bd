import { ColorRing } from 'react-loader-spinner'
const LoaderSpiner = () => {
    return (
        <div className='min-h-[80vh] flex justify-center items-center'>
            <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={['black']}
            />)
        </div>
    )
}

export default LoaderSpiner
