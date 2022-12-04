import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  ScrollView,
  ViewStyle,
} from 'react-native';
import {Icon} from 'assets/icons';
import {Colors, spacing} from 'config/Theme';
import CloseIcon from 'assets/icons/CloseIcon';

interface IDropdownProps {
  placeholder: string;
  data: Array<string>;
  onChange?: (item: string) => void;
}

const Dropdown = (props: IDropdownProps) => {
  const {data, placeholder, onChange} = props;
  const [selected, setSelected] = useState<string>('');
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const pickItem = (item: string) => {
    setSelected(item);
    onChange && onChange(item);
    closeModal();
  };

  return (
    <View>
      <TouchableOpacity
        onPress={openModal}
        style={[styles.dropdown, styles.space]}>
        <Text style={dropdownText(!!selected)}>{selected || placeholder}</Text>
        <Icon.ChevronIcon />
      </TouchableOpacity>
      <Modal animationType="slide" transparent visible={modalVisible}>
        <View style={styles.centered}>
          <TouchableOpacity style={styles.close} onPress={closeModal}>
            <CloseIcon />
          </TouchableOpacity>
          <ScrollView style={styles.data} showsVerticalScrollIndicator={false}>
            {data.map((item, idx) => (
              <TouchableOpacity
                onPress={() => pickItem(item)}
                style={[styles.dropdown, styles.dataItem]}
                key={idx}>
                <Text style={dropdownText(false)}>{item}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    backgroundColor: Colors.background,
    paddingHorizontal: spacing.medium,
    paddingTop: spacing.input,
    paddingBottom: spacing.input,
    borderRadius: 8,
  },
  space: {marginTop: spacing.small, marginBottom: spacing.medium},
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.background,
    paddingHorizontal: spacing.medium,
    paddingVertical: spacing.input,
    borderRadius: 8,
  },
  close: {position: 'relative', marginLeft: 'auto'},
  centered: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '55%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: Colors.white,
    paddingVertical: spacing.huge,
    paddingHorizontal: spacing.huge,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  data: {marginTop: spacing.medium, width: '100%'},
  dataItem: {marginTop: spacing.medium},
});

const dropdownText = (isSelected: boolean) =>
  ({color: isSelected ? Colors.textColor : Colors.placeholder} as ViewStyle);

export default Dropdown;
