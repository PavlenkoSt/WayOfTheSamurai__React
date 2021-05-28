import DAL from "../api/api"
import { getProfile, profileActions } from "./profileReducer"

jest.mock('../api/api')
const mockedDAL = DAL as jest.Mocked<typeof DAL>

const dispatchMock = jest.fn()
const getStateMock = jest.fn()

beforeEach(() => {
    dispatchMock.mockClear()
    getStateMock.mockClear()
})


it('getProfile thunk', async () => {
    const thunk = getProfile(0, '2')

    const result = {
        resultCode: 0,
        errors: [],
        data: {
            profile: 'some profile data'
        }
    }

    //@ts-ignore
    mockedDAL.profile.getProfile.mockReturnValue(Promise.resolve(result))

    await thunk(dispatchMock, getStateMock, {})

    expect(dispatchMock).toBeCalledTimes(1)
    expect(dispatchMock).toHaveBeenCalledWith(profileActions.getUserProfile(result))
})