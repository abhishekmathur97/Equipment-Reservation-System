import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  equipmentList: [{
    id: '6302cfa9-23e6-409c-b993-a4df972b16d2',
    name: 'Equipment 1',
    status: 'available',
    description: 'Convenient, modern',
    total: 10,
    image: '',
  },{
    id: '6302cfa9-23e6-409c-b993-a4df972b16d7',
    name: 'Equipment 2',
    status: 'in use',
    description: 'Convenient, modern',
    total: 10,
    image: '',
  },{
    id: '6302cfa9-23e6-409c-b993-a4df972b16d4',
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
    addEquipment: (state, action) => ({
      ...state, equipmentList: [...state.equipmentList, action.payload]
    }),
    updateEquipment: (state, action) => ({
      ...state, equipmentList: [...state.equipmentList.map(equipment => {
          if (equipment.id === action.payload.id)
            return {
              ...equipment,
              ...action.payload
            };
          return equipment;
        })]
    }),
  },
})

export const equipmentActions = equipmentSlice.actions;

export default equipmentSlice.reducer;