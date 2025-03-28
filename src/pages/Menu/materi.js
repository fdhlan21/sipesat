import { View, Text, ScrollView, TouchableNativeFeedback } from 'react-native';
import React from 'react';
import { colors, fonts } from '../../utils';
import { MyHeader } from '../../components';
import { Image } from 'react-native';

export default function Materi({ navigation }) {
  return (
    <View style={{
      flex: 1,
      backgroundColor: colors.white
    }}>
      <MyHeader title="Materi" />

      <ScrollView>
        <View style={{
          padding: 10
        }}>
          {/* Buatkan card menunya di sini */}

        <TouchableNativeFeedback>
        <View style={{
            borderWidth: 1,
            borderRadius: 20,
            position: 'relative', // Tambahkan ini untuk memungkinkan absolute positioning di dalamnya
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Image 
              source={require('../../assets/dummy_materi.png')} 
              style={{
                borderRadius: 20,
                width: 321, // Sesuaikan dengan ukuran gambar dummy
                height: 203, // Sesuaikan dengan ukuran gambar dummy
              }}
            />

            <Image 
              source={require('../../assets/gradient.png')} 
              style={{
                width: 339, // Sesuaikan dengan ukuran gambar dummy
                height: 203, // Sesuaikan dengan ukuran gambar dummy
                position: 'absolute', // Gunakan absolute positioning
                top: 0, // Posisikan di bagian atas
                left: -1, // Posisikan di bagian kiri
                borderRadius: 20, // Sesuaikan dengan border radius gambar dummy
              }}
            />

            {/* Tambahkan teks di atas gradient */}
            <View style={{
              position: 'absolute',
              top: 120, // Sesuaikan posisi teks dari atas
              left: 20, // Sesuaikan posisi teks dari kiri
              right: 20, // Sesuaikan posisi teks dari kanan
            }}>
              <Text style={{
                color: colors.white,
                fontSize: 18,
                fontWeight: 'bold',
                marginBottom: 10,
                fontFamily:fonts.primary[600],
                textAlign:"center",
                top:10
              }}>
               Panduan Kerja Pengawas Sekolah Pendidikan Dasar dan Menengah
              </Text>
             
             <View style={{
                flexDirection:"row",
                justifyContent:'flex-end',
                alignItems:"center"
             }}>
             <Text style={{
                color: colors.white,
                fontSize: 12,
                fontStyle: 'italic',
                top:5
              }}>
                Selengkapnya {'>'}
              </Text>
             </View>
            </View>
          </View>
        </TouchableNativeFeedback>
       
        </View>
      </ScrollView>
    </View>
  );
}