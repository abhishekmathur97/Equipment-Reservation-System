import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  equipmentList: [{
    id: 1,
    name: 'Equipment 1',
    status: 'available',
    description: 'Convenient, modern',
    total: 10,
    image: '',
  },{
    id: 2,
    name: 'Equipment 2',
    status: 'in use',
    description: 'Convenient, modern',
    total: 10,
    image: '',
  },{
    id: 3,
    name: 'Equipment 3',
    status: 'in repair',
    description: 'Convenient, modern',
    total: 10,
    image: '',
  }],
}

export const equipmentSlice = createSlice({
  name: 'equipment',
  initialState,
  reducers: {
    deleteById: (state, action) => (
      { ...state, equipmentList: state.equipmentList.filter(equipment => equipment.id !== action.payload) }
    ),
  },
})

export const equipmentActions = equipmentSlice.actions;

export default equipmentSlice.reducer;